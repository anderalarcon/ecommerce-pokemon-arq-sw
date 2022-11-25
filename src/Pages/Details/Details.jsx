import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import NavBar from '../../Components/NavBar/NavBar'
import { productsJSON } from '../../utilities/products'
import axios from 'axios'
const URL_API = "https://pokecatalogdb.azurewebsites.net/products";

// const URL_API = 'http://localhost:8000/products'

const Details = () => {
  const { id_product } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${URL_API}/${id_product}`)
        setProduct(result.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
    console.log(product)
  }, [])
  console.log(product)
  return (
    <>
      <Header />
      <NavBar />
      {product?.pictures && (
        <Card
          id={product?.id}
          src={product?.pictures[0]}
          price={product?.price}
          category={product?.category}
        />
      )}
    </>
  )
}

export default Details
