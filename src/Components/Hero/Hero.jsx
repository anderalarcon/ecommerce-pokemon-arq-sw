import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import baner1 from '../../assets/static/hero/baner-1.jpg'
import baner2 from '../../assets/static/hero/baner-2.jpg'
import baner3 from '../../assets/static/hero/baner-3.jpg'
import baner4 from '../../assets/static/hero/baner-4.jpg'

import './Hero.scss'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero_container'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className='banner'>
              <div className='banner_container'>
                <h1 className='banner_container_title_1'>Ofertas Navideñas</h1>
                <Link className='banner_container_link'>Comprar ahora</Link>
              </div>
              <img src={baner2} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='banner'>
              <div className='banner_container'>
                <h1 className='banner_container_title_2'>Calcetines del primer equipo Pokémon </h1>
                <Link className='banner_container_link'>Comprar ahora</Link>
              </div>
              <img src={baner1} alt='' />
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide>
          <div className='banner'>
              <div className='banner_container'>
                <h1 className='banner_container_title_3'>Peluches y accesorios</h1>
                <Link className='banner_container_link'>Comprar ahora</Link>
              </div>
              <img src={baner3} alt='' />
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide>
          <div className='banner'>
              <div className='banner_container'>
                <h1 className='banner_container_title_4'>Pre compra Crown Zenith Disponible</h1>
                <Link className='banner_container_link'>Comprar ahora</Link>
              </div>
              <img src={baner4} alt='' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Hero
