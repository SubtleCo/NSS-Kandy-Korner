import React, { useContext, useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import { ProductContext } from './ProductProvider'
import { ProductTypeContext } from './ProductTypeProvider'

export const ProductList = () => {
    const { products, getProducts, searchQuery } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)
    const [filtered, setFiltered] = useState([])


    useEffect(() => {
        getProductTypes().then(getProducts)
    }, [])

    useEffect(() => {
        if (searchQuery) {
            setFiltered(
                products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
            )
        } else {
            setFiltered(products)
        }
    }, [products, searchQuery])


    return (
        <section className="products">
            {
                filtered.map(product => {
                    const productType = productTypes.find(pT => pT.id === product.productTypeId)
                    return <ProductCard key={product.id} product={product} productType={productType} />
                })
            }
        </section>
    )
}