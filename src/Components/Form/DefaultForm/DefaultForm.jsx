import React, { useState } from 'react'
import './DefaultForm.scss'
import background from '../../../assets/static/signin/signin.jpg'
import outlookImg from '../../../assets/static/signin/outlook.png'
import axios from 'axios'
import { useMsal } from '@azure/msal-react'
const baseURL =
  'http://localhost:8081/pokeshop-backend-identidad/api/tbusuarios'

const DefaultForm = () => {
  const [show, setShow] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { instance } = useMsal()
  const handleAzureAD = () => {
    instance.loginRedirect({
      scopes: ['user.read']
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    axios
      .post(`${baseURL}/login`, {
        email: email,
        clave: password
      })
      .then((response) => {
        console.log(response.data)
      })
  }
  const handleRegister= (e) => {
    e.preventDefault();
    axios
    .post(`${baseURL}/register`, {
      email: email,
      clave: password
    })
    .then((response) => {
      console.log(response.data)
    })
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
      <form className='defaultform' onSubmit={handleRegister}>
        <div className='defaultform_container'>
          <h2 className='defaultform_container_title'>Registro</h2>
          <div className='defaultform_container_box'>
            <label className='defaultform_container_box_label' htmlFor=''>
              Nombre
            </label>
            <input
              placeholder='Ingresa tu nombre'
              className='defaultform_container_box_input'
              type='text'
              required
            />
          </div>
          <div className='defaultform_container_box'>
            <label htmlFor=''>Email</label>
            <input
              placeholder='Ingresa tu email'
              className='defaultform_container_box_input'
              type='email'
              required
            />
          </div>
          <div className='defaultform_container_box'>
            <label htmlFor=''>Contraseña</label>
            <input
              placeholder='Ingresa tu contraseña'
              className='defaultform_container_box_input'
              type='password'
              required
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button className='defaultform_container_buttons_btn'>
              Registrar
            </button>
          </div>
        </div>
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
