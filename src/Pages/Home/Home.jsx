import React from 'react'
import Explore from '../../Components/Explore/Explore'
import Header from "../../Components/Header/Header"
import Hero from '../../Components/Hero/Hero'
import NavBar from "../../Components/NavBar/NavBar"

const Home = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <Hero/>
    <Explore/>
    </>
  )
}

export default Home