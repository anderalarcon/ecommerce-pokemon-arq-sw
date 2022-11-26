import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import NavBar from '../../Components/NavBar/NavBar'
import { productsJSON } from '../../utilities/products'
import axios from 'axios'
import DetailCard from '../../Components/DetailCard/DetailCard'
const URL_API = "https://pokecatalogdb.azurewebsites.net/products";

// const URL_API = 'http://localhost:8000/products'

const Details = () => {
  const { id_product } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${URL_API}/${id_product}`)
        setProduct(result.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
    console.log(product)
  }, [])
  return (
    <>
      <Header />
      <NavBar />
      {/* {product?.pictures && (
        <Card
          id={product?.id}
          src={product.pictures[0]}
          price={product?.price}
          category={product?.category}
        />
      )} */}
      {!loading && (
        <DetailCard
          id={product?.id}
          src={product?.pictures[0]}
          price={product?.price}
          category={product?.category}
          name={product?.name}
          description={product?.description}
        />
      )}
    </>
  )
}

export default Details
