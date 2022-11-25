import React from 'react'
import { Link } from 'react-router-dom'
import { categoriesJSON } from '../../utilities/categories'

import './Explore.scss'

const Explore = () => {
  return (
    <div className='explore'>
      <h1 className='explore_title'>Explora más productos</h1>
      <div className='explore_container'>
        {categoriesJSON.map(({ id, slug, category, srcExplore }) => {
          return (
            <Link
              className='explore_container_view'
              to={`/${slug}`}
            >
              <img  className='explore_container_view_img' src={srcExplore} alt='' />
              <h1  className='explore_container_view_category'>{category}</h1>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Explore
