import React, { createContext, useState } from 'react'

export const CustomerProductContext = createContext()

export const CustomerProductProvider = props => {
    const [customerProducts, setCustomerProducts] = useState([])

    const getCustomerProducts = () => {
        return fetch(`http://localhost:8088/customerProducts`)
            .then(res => res.json())
            .then(setCustomerProducts)
    }

    const addCustomerProduct = cP => {
        return fetch(`http://localhost:8088/customerProducts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cP)
        })
            .then(getCustomerProducts)
    }

    const deleteCustomerProduct = id => {
        return fetch(`http://localhost:8088/customerProducts/${id}`, {
            method: "DELETE"
        })
            .then(getCustomerProducts)
    }

    return (
        <CustomerProductContext.Provider value={{
            customerProducts, getCustomerProducts, addCustomerProduct, deleteCustomerProduct
        }}>
            {props.children}
        </CustomerProductContext.Provider>
    )
}