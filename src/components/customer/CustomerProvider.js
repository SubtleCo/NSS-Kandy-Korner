import React, { createContext, useEffect, useState } from 'react'

export const CustomerContext = createContext()

export const CustomerProvider = props => {
    const [customerId, setCustomerId] = useState([])
    const [customerOrder, setCustomerOrder] = useState([])

    useEffect(() => {
        setCustomerId(parseInt(localStorage.getItem("kandy_customer")))
        console.log(customerId)
    }, [])

    return (
        <CustomerContext.Provider value={{
            customerId, customerOrder, setCustomerOrder
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}