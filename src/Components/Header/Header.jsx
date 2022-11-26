import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/static/header/logo.svg'
import sigin from '../../assets/static/header/signin.png'
import shopcar from '../../assets/static/header/shopcar.png'
import add from '../../assets/static/header/add.svg'
import exit from '../../assets/static/header/exit.svg'
import welcome from '../../assets/static/header/welcome.svg'
import { motion } from 'framer-motion'

import { useIsAuthenticated, useMsal } from '@azure/msal-react'

const Header = () => {
  const { instance } = useMsal()
  const isAuthenticated = useIsAuthenticated()

  const handleSignOut = () => {
    if (getCache()) {
      localStorage.removeItem('loggin')
      localStorage.removeItem('email')
      window.location.reload(false)
    } else {
      instance.logoutRedirect()
    }
  }

  const getCache = () => {
    if (localStorage.getItem('loggin') === null) {
      return false
    }
    return true
  }

  return (
    <header className='header container'>
      <div className='header_container'>
        <div className='header_container_left'>
          <Link className='header_container_left_link' to={'/'}>
            <motion.img  initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='header_container_left_link_img'
              alt='Logo Pokeshop'
              src={logo}
            />
          </Link>
        </div>
        <div className='header_container_right'>
          {isAuthenticated || getCache() ? (
            <motion.h1  initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
              className='header_welcome'
              style={{ display: 'flex', alignItems: 'center', gap: '3px' }}
            >
              Bienvenido{' '}
              <span>
                <img style={{ width: '45px' }} src={welcome} alt='' />
              </span>{' '}
            </motion.h1>
          ) : (
            <Link to={'/login'} className='header_container_right_btn'>
              <img
                className='header_container_right_btn_icon'
                src={sigin}
                alt=''
              />
              Ingresar
            </Link>
          )}

          <Link to={'/car-shop'} className='header_container_right_btn'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <img
                className='header_container_right_btn_icon'
                src={shopcar}
                alt=''
              />
              Carrito
            </motion.div>
          </Link>
          <Link to={'/products/new'} className='header_container_right_btn'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <img
                style={{ width: '10px' }}
                className='header_container_right_btn_icon'
                src={add}
                alt=''
              />
              Nuevo producto
            </motion.div>
          </Link>
          {isAuthenticated || getCache() ? (
            <motion.button  initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
              className='header_container_exit'
              style={{ display: 'flex', alignItems: 'center' }}
              onClick={handleSignOut}
            >
              <span style={{ marginRight: '3px' }}>
                <img
                  src={exit}
                  alt=''
                  style={{ width: '20px', marginRight: '3px' }}
                />
              </span>
              Salir
            </motion.button>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default Header
