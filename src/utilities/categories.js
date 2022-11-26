// import cartIcon from '../assets/static/navbar/cart.svg'
import pikachu from "../assets/static/navbar/pikachu.png"
import psyduck from "../assets/static/navbar/psyduck.png"
import snorlax from "../assets/static/navbar/snorlax.png"
import meowth from "../assets/static/navbar/meowth.png"
import eevee from "../assets/static/navbar/eevee.png"

import cartas from '../assets/static/explore/cartas.jpg'
import ropa from '../assets/static/explore/ropa.jpg'
import videojuegos from '../assets/static/explore/videojuegos.jpg'
import figuras from '../assets/static/explore/figuras.jpg'
import peluches from '../assets/static/explore/peluches.jpg'

export const categoriesJSON = [
  {
    id: 1,
    category: 'Cartas',
    slug: 'cards',
    src: pikachu,
    srcExplore: cartas
  },
  { id: 2, category: 'Ropa', slug: 'clothes', src: meowth, srcExplore: ropa },
  {
    id: 3,
    category: 'Peluches',
    slug: 'plush',
    src: eevee,
    srcExplore: peluches
  },
  {
    id: 4,
    category: 'Figuras',
    slug: 'figures',
    src: snorlax,
    srcExplore: figuras
  },
  {
    id: 5,
    category: 'Videojuegos',
    slug: 'videogames',
    src: psyduck,
    srcExplore: videojuegos
  }
]
