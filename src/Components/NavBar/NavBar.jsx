import React from 'react'
import { Link } from 'react-router-dom'
import { categoriesJSON } from '../../utilities/categories'
import { motion } from 'framer-motion'

import './NavBar.scss'
const NavBar = () => {
  return (
    <nav className='nav'>
      <div className='nav_container'>
        {categoriesJSON.map(({ id, category, slug, src }) => {
          return (
            <Link className='nav_container_link' key={id} to={`/${slug}`}>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='nav_container_link_img'
                src={src}
                alt=''
              />

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {category}
              </motion.p>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default NavBar
