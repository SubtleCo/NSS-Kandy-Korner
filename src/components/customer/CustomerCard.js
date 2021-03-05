import React from 'react'

export const CustomerCard = ({customer}) => {
    return (
        <>
            <h3 className="customer__name">{customer.name}</h3>
            <p className="customer__candies">Candies bought: {customer.count}</p>
        </>
    )
}