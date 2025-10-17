import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../utils/constants'

const ProductGrid = () => {
  return (
	<section className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
	  {products.map(product => <ProductCard key={product.id} id={product.id} {...product}/>) }
	</section>
  )
}

export default ProductGrid
