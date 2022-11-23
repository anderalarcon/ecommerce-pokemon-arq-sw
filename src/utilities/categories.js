import cartIcon from '../assets/static/navbar/cart.svg'
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
    src: cartIcon,
    srcExplore: cartas
  },
  { id: 2, category: 'Ropa', slug: 'clothes', src: cartIcon, srcExplore: ropa },
  {
    id: 3,
    category: 'Peluches',
    slug: 'plush',
    src: cartIcon,
    srcExplore: peluches
  },
  {
    id: 4,
    category: 'Figuras',
    slug: 'figures',
    src: cartIcon,
    srcExplore: figuras
  },
  {
    id: 5,
    category: 'Videojuegos',
    slug: 'videogames',
    src: cartIcon,
    srcExplore: videojuegos
  }
]
