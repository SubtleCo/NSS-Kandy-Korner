import React, { useContext, useEffect } from 'react'
import { ProductCard } from './ProductCard'
import { ProductContext } from './ProductProvider'
import { ProductTypeContext } from './ProductTypeProvider'

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)

    useEffect(() => {
        getProductTypes().then(getProducts)
    }, [])


    return (
        <section className="products">
            {console.log(products)}
            {console.log(productTypes)}
            {
                products.map(product => {
                    const productType = productTypes.find(pT => pT.id === product.productTypeId)
                    return <ProductCard key={product.id} product={product} productType={productType}/>
                })
            }
        </section>
    )
}