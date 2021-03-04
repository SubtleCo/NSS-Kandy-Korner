import React, { useContext, useEffect } from 'react'
import { CustomerProductContext } from '../products/CustomerProductProvider'
import { CustomerCard } from './CustomerCard'
import { CustomerContext } from './CustomerProvider'

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)
    const { customerProducts, getCustomerProducts } = useContext(CustomerProductContext)

    useEffect(() => {
        getCustomerProducts().then(getCustomers)
    }, [])
    
    return (
        <div className="customers">
            {/* <h2>Hello, customers</h2> */}
            {
                customers.map(customer => {
                    const count = customerProducts.filter(cP => cP.customerId === customer.id).length
                    return <CustomerCard key={customer.id} customer={customer} count={count}/>
                })
            }
        </div>
    )
}