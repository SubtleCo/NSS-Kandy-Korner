import React from 'react'

export const OrderCard = ({product}) => {
    return (
        <div className="customerOrder__product">
        <h4 className="customerOrder__product__name">{product.name}</h4>
        <p className="customerOrder__product__price">${product.price}</p>
    </div>
    )
}