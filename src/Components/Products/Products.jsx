import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import './Products.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// const URL_API = 'https://pokecatalogdb.azurewebsites.net/products'
const URL_API = 'http://localhost:8000/Products'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${URL_API}`)
        setProducts(result.data)
        console.log(result.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])



  return (
    <div className='productshome'>
      <h1 className='productshome_title'>Nuestros productos</h1>
      <div className='productshome_container'>
        {products.map(
          ({ id, name, description, price, pictures, category }) => {
            return (
              (
                <Card
                  id={id}
                  name={name}
                  description={description}
                  price={price}
                  src={pictures[0].uri}
                  category={category}
                  destino={'detalle'}
                ></Card>
              ) || <Skeleton />
            )
          }
        )}
      </div>
    </div>
  )
}

export default Products
