import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './DetailCard.scss'
import { motion } from 'framer-motion'

const DetailCard = ({ id, name, description, price, src, category }) => {
  const [quantity, setQuantity] = useState(1)
  const minus = () => {
    setQuantity(quantity - 1)
  }
  const plus = () => {
    setQuantity(quantity + 1)
  }
  return (
    <div className='detail'>
      <div className='detail_container'>
        <div className='detail_container_left'>
          <div className='detail_container_left_ctn'>
            <motion.img initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} src={src.uri} alt='' />
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} className='detail_container_right'>
          <p className='breadscrumb'>
            <Link to='/'>Home</Link> /{' '}
            <Link to={`/${category}`}>{category}</Link> / <span>{name}</span>
          </p>
          <h2 className='detail_container_right_title'>{name}</h2>

          <p className='detail_container_right_price'>${price}</p>
          <div className='detail_container_right_ctn'>
            <div className='detail_container_right_ctn_left'>
              <button
                className='detail_container_right_ctn_left_minus'
                onClick={minus}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className='detail_container_right_ctn_left_plus'
                onClick={plus}
              >
                +
              </button>
            </div>
            <div className='detail_container_right_ctn_right'>
              <button className='detail_container_right_ctn_right_car'>
                Agregar al carrito
              </button>
            </div>
          </div>
          <p className='detail_container_detail'>Detalles del producto</p>
          <p className='detail_container_description'>
            {description ||
              ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus similique commodi quos hic quo excepturi obcaecati recusandae quia veritatis voluptates.'}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default DetailCard
