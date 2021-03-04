import React from 'react'

export const OrderCard = ({ name, count, price }) => {
    return (
        <div className="customerOrder__product">
            <h4 className="customerOrder__product__name">{name}</h4>
            <p className="customerOrder__product__price">{count} at ${price}</p>
        </div>
    )
}