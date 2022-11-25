import React from 'react'
import Explore from '../../Components/Explore/Explore'
import Header from "../../Components/Header/Header"
import Hero from '../../Components/Hero/Hero'
import NavBar from "../../Components/NavBar/NavBar"
import Products from '../../Components/Products/Products'

const Home = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <Hero/>
    <Products/>
    <Explore/>
    </>
  )
}

export default Home