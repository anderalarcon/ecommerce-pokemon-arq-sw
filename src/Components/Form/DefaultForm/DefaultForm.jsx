import React, { useState } from 'react'
import './DefaultForm.scss'
import background from '../../../assets/static/signin/signin.jpg'
import outlookImg from '../../../assets/static/signin/outlook.png'
import axios from 'axios'
import { useMsal } from '@azure/msal-react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import pikachu from '../../../assets/static/form/pikachu.webp'
const baseURL = 'http://localhost:8081/pokeshop-backend-identidad'

const DefaultForm = () => {
  const [show, setShow] = useState(true)
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [address, setAddress] = useState('')
  const [dni, setDni] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const [marital, setMarital] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [startDate, setStartDate] = useState(new Date())

  const [errorLogin, setErrorLogin] = useState(false)
  const [success, setSuccess] = useState(false)
  const [alreadyRegistered, setAlreadyRegistered] = useState(false)

  const { instance } = useMsal()
  const navigate = useNavigate()

  const handleAzureAD = () => {
    instance.loginRedirect({
      scopes: ['user.read']
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    const body = {
      email: email,
      clave: password
    }
    axios.post(`${baseURL}/api/tbusuarios/login`, body).then((response) => {
      console.log(response.data)
      if (response.data.mensaje === 'Usuario logeado exitosamente') {
        localStorage.setItem('loggin', true)
        localStorage.setItem('email', email)

        navigate('/')
      } else {
        setErrorLogin(true)
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    const body = {
      nombre: name,
      nroDocumento: dni,
      apellido1: lastname,
      direccion: address,
      celular: phone,
      genero: gender,
      estadoCivil: marital,
      fechaNacimiento: startDate,
      tbTipoDocumento: {
        idTipoDocumento: 1
      },
      tbDistrito: {
        idDistrito: 1
      },
      estado: true,
      tbUsuario: {
        email: email,
        clave: password,
        estado: true
      }
    }
    console.log(body)
    axios
      .post(`${baseURL}/api/tbpersonas`, body)
      .then((response) => {
        console.log(response.data)
        if (response.data.codigo === '201') {
          setSuccess(true)
        }
        if (
          response.data.mensaje.includes(
            'El usuario ya se encuentra registrado'
          )
        ) {
          setAlreadyRegistered(true)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getSuccess = () => {
    if (success) {
      return (
        <div className='success'>
          <div className='success_container'>
            <img
              className='success_container_img'
              src={pikachu}
              alt='Pikachu Success'
            />
          </div>
          <h1 className='success_container_text'>¡Bienvenido!</h1>
          <h2 className='success_container_text'>
            Se ha registrado de manera exitosa
          </h2>
          <div className='success_container_button'>
            <button
              className='success_container_button_btn'
              onClick={() => {
                setShow(!show)
              }}
            >
              Ingresar
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className='defaultform_register_container'>
        <h2 className='defaultform_register_container_title'>Registro</h2>
        <div className='defaultform_register_container_form'>
          <div className='defaultform_register_container_form_box'>
            <label
              className='defaultform_register_container_form_box_label'
              htmlFor=''
            >
              Nombre
            </label>
            <input
              placeholder='Ingresa tu nombre'
              className='defaultform_register_container_form_box_input'
              type='text'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='defaultform_register_container_form_box'>
            <label
              className='defaultform_register_container_form_box_label'
              htmlFor=''
            >
              Apellido
            </label>
            <input
              placeholder='Ingresa tu apellido'
              className='defaultform_register_container_form_box_input'
              type='text'
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>{' '}
          <div className='defaultform_register_container_form_box'>
            <label
              className='defaultform_register_container_form_box_label'
              htmlFor=''
            >
              Dirección
            </label>
            <input
              placeholder='Ingresa tu Dirección'
              className='defaultform_register_container_form_box_input'
              type='text'
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className='defaultform_register_container_form_box'>
            <label
              className='defaultform_register_container_form_box_label'
              htmlFor=''
            >
              Dni
            </label>
            <input
              placeholder='Ingresa tu DNI'
              className='defaultform_register_container_form_box_input'
              type='text'
              required
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </div>
          <div className='defaultform_register_container_form_box'>
            <label
              className='defaultform_register_container_form_box_label'
              htmlFor=''
            >
              Celular
            </label>
            <input
              placeholder='Ingresa tu número de celular'
              className='defaultform_register_container_form_box_input'
              type='text'
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='defaultform_register_container_form_box'>
            <label
              className='defaultform_register_container_form_box_label'
              htmlFor=''
            >
              Genero
            </label>
            <select
              className='defaultform_register_container_form_box_input'
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value=''>Selecciona tu genero</option>
              <option value='MASCULINO'>Masculino</option>
              <option value='FEMENINO'>Femenino</option>
              <option value='NO BINARIO'>No binario</option>
            </select>
          </div>
          <div className='defaultform_register_container_form_box'>
            <label
              className='defaultform_register_container_form_box_label'
              htmlFor=''
            >
              Estado civil
            </label>
            <select
              className='defaultform_register_container_form_box_input'
              required
              value={marital}
              onChange={(e) => setMarital(e.target.value)}
            >
              <option value=''>Selecciona tu estado civil</option>
              <option value='SOLTERO'>Soltero</option>
              <option value='CASADO'>Casado</option>
              <option value='DIVORCIADO'>Divorciado</option>
              <option value='VIUDO'>Viudo</option>
            </select>
          </div>
          <div className='defaultform_register_container_form_box'>
            <label
              className='defaultform_register_container_form_box_label'
              htmlFor=''
            >
              Fecha de nacimiento
            </label>
            <DatePicker
              className='defaultform_register_container_form_box_input'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className='defaultform_register_container_form_box'>
            <label htmlFor=''>Email</label>
            <input
              placeholder='Ingresa tu email'
              className='defaultform_register_container_form_box_input'
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='defaultform_register_container_form_box'>
            <label htmlFor=''>Contraseña</label>
            <input
              placeholder='Ingresa tu contraseña'
              className='defaultform_register_container_form_box_input'
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {alreadyRegistered && (
          <h2 className='alreadyregistered'>
            El usuario ya se encuentra registrado
          </h2>
        )}
        <div style={{ textAlign: 'center' }}>
          <button
            className='defaultform_register_container_form_buttons_btn'
            type='submit'
          >
            Registrar
          </button>
        </div>
      </div>
    )
  }

  const getForms = () => {
    if (show) {
      return (
        <form className='defaultform' onSubmit={handleSubmit}>
          <div className='defaultform_container'>
            <h2 className='defaultform_container_title'>Login</h2>
            <div className='defaultform_container_box'>
              <label htmlFor=''>Email</label>
              <input
                placeholder='Ingresa tu email'
                className='defaultform_container_box_input'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='defaultform_container_box'>
              <label htmlFor=''>Contraseña</label>
              <input
                placeholder='Ingresa tu contraseña'
                className='defaultform_container_box_input'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='defaultform_container_buttons'>
              {errorLogin && (
                <p className='defaultform_container_buttons_error'>
                  Los datos ingresados son incorrectos
                </p>
              )}
              <button
                type='submit'
                className='defaultform_container_buttons_btn'
              >
                Ingresar
              </button>
              <div
                className='defaultform_container_buttons_outlook'
                onClick={handleAzureAD}
              >
                <img
                  className='defaultform_container_buttons_outlook_img'
                  src={outlookImg}
                  alt=''
                />
                <p>Ingresar con Hotmail</p>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p>o</p>
              <button
                className='defaultform_container_buttons_register'
                onClick={() => {
                  setShow(!show)
                }}
              >
                Registrate
              </button>
            </div>
          </div>
        </form>
      )
    }
    return (
      <form className='defaultform_register' onSubmit={handleRegister}>
        {getSuccess()}
      </form>
    )
  }

  return (
    <>
      <div className='bacgkround'>
        <img
          className='bacgkround_img'
          src={background}
          alt='Bacground Pokeshop'
        />
      </div>
      {getForms()}
    </>
  )
}

export default DefaultForm
