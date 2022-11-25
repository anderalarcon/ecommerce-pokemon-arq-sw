import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Card.scss'
import { useIsAuthenticated, useMsal } from '@azure/msal-react'

const Card = ({ id, name, description, price, src, category,destino }) => {
  const { instance } = useMsal()
  const isAuthenticated = useIsAuthenticated()
  const handleAddToCart = () => {
    console.log('Add to CART')
  }
  const handleAzureAD = () => {
    instance.loginRedirect({
      scopes: ['user.read']
    })
  }

  const getColorTag = () => {
    if (category === 'cards') {
      return 'gray'
    } else if (category === 'plush') {
      return 'blue'
    } else if (category === 'videogames') {
      return 'red'
    } else if (category === 'figures') {
      return 'green'
    }
    return 'pink'
  }
  return (
    <div className='card'>
      <Link to={`${destino==='categorias'?category:category+"/"+id}`} className='card_link'>
        <div className='card_container'>
          <div className='card_container_image'>
            <img className='card_container_image_img' src={src} alt={name} />
          </div>
          <div className='container_bottom'>
            <h3 className='card_container_description'>{description}</h3>
            {/* <h1 className='card_container_name'>{name}</h1> */}
            {/* <p className='card_container_description'>Detalle</p> */}
            <span
              className='tag'
              style={{
                backgroundColor: getColorTag(), color:'white'
              }}
            >
              {category}
            </span>
            <div className='card_container_price'>
              <span className='card_container_price_span'>${price}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className='card_button'>
        <button
          onClick={isAuthenticated ? handleAddToCart : handleAzureAD}
          className='card_button_btn'
        >
          Agregar al Carro
        </button>
      </div>
    </div>
  )
}

export default Card
