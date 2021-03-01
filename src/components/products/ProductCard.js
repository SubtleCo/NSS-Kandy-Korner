import React from 'react'

export const ProductCard = ({ product }) => {

    return (
        <article className="product">
            <h2 className="product__name">{product.name}</h2>
            <p className="product__id">Product # {product.id}</p>
            <p className="product__price">Cost: ${product.price}</p>
            <p className="product__typeId">ProductTypeId: {product.productTypeId}</p>

        </article>
    )

}