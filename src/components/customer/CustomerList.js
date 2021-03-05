import React, { useContext, useEffect, useState } from 'react'
import { CustomerProductContext } from '../products/CustomerProductProvider'
import { CustomerCard } from './CustomerCard'
import { CustomerContext } from './CustomerProvider'

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)
    const { customerProducts, getCustomerProducts } = useContext(CustomerProductContext)
    const [sortedCustomers, setSortedCustomers] = useState([])
    let customersWithCounts = []

    useEffect(() => {
        getCustomerProducts().then(getCustomers).then(() => {
            customersWithCounts = customers.map(customer => {
                customer.count = customerProducts.filter(cP => cP.customerId === customer.id).length
                return customer
            })
            setSortedCustomers(customersWithCounts.sort((a,b) => b.count - a.count))
        })
    }, [])
    
    return (
        <div className="customers">
            <h2>Hello, customers</h2>
            {
                sortedCustomers.map(customer => {
                    return <CustomerCard key={customer.id} customer={customer}/>
                })
            }
        </div>
    )
}