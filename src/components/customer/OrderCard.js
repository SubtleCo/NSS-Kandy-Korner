import React from 'react'

export const OrderCard = ({ name, count, price, totalCost }) => {
    return (
        <div className="customerOrder__product">
            <h4 className="customerOrder__product__name">{name}</h4>
            <p className="customerOrder__product__price">{count} @ ${price}</p>
            <p className="customerOrder__product__groupPrice">Item Subtotal: {totalCost}</p>
        </div>
    )
}