import React, { createContext, useEffect, useState } from 'react'

export const CustomerContext = createContext()

export const CustomerProvider = props => {
    const [customers, setCustomers] = useState([])
    const [customerId, setCustomerId] = useState([])
    const [customerOrder, setCustomerOrder] = useState([])

    useEffect(() => {
        setCustomerId(parseInt(localStorage.getItem("kandy_customer")))
    }, [])

    const getCustomers = () => {
        return fetch(`http://localhost:8088/customers`)
            .then(res => res.json())
            .then(setCustomers)
    }

    return (
        <CustomerContext.Provider value={{
            customerId, customerOrder, setCustomerOrder, customers, getCustomers
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}