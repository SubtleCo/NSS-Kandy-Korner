import React, { useContext, useEffect, useState } from 'react'
import { CustomerProductContext } from '../products/CustomerProductProvider'
import { ProductContext } from '../products/ProductProvider'
import { CustomerContext } from './CustomerProvider'
import { OrderCard } from './OrderCard'

export const CustomerOrder = () => {
    const { customerId } = useContext(CustomerContext)
    const { products, getProducts } = useContext(ProductContext)
    const { customerProducts, getCustomerProducts } = useContext(CustomerProductContext)
    let [orderArray, setOrderArray] = useState([])

    useEffect(() => {
        getCustomerProducts()
            .then(getProducts)
            .then(() => {
                const thisCustomersProducts = customerProducts.filter(cP => cP.customerId === customerId)
                setOrderArray(thisCustomersProducts)
            })

    }, [])

    console.log(`order array` + orderArray)
    return (
        <section className="customerOrder">
            <h2 className="customerOrder__title">Your Order</h2>
            {
                orderArray.map(customerProduct => {
                    const product = products.find(p => p.id === customerProduct.productId)
                    return <OrderCard key={customerProduct.id} product={product} />
                })
            }
        </section>
    )
}