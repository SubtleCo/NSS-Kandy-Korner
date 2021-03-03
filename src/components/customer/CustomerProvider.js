import React, { createContext, useEffect, useState } from 'react'

export const CustomerContext = createContext()

export const CustomerProdivder = props => {
    const [customerId, setCustomerId] = useState(0)

    useEffect(() => {
        setCustomerId(parseInt(localStorage.getItem("kandy_customer")))
    })

    return (
        <CustomerContext.Provider value={{
            customerId
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}