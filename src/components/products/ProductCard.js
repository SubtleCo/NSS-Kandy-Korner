import React from 'react'

export const ProductCard = ({ product, productType }) => {

    return (
        <article className="product">
            <h2 className="product__name">{product.name}</h2>
            <p className="product__id">Product # {product.id}</p>
            <p className="product__price">Cost: ${product.price}</p>
            <p className="product__type">Product Type: {productType.name}</p>

        </article>
    )

}