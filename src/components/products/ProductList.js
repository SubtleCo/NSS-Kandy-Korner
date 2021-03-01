import React, { useContext, useEffect } from 'react'
import { ProductCard } from './ProductCard'
import { ProductContext } from './ProductProvider'

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <article className="products">
            {
                products.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </article>
    )
}