import React, { useContext, useEffect, useState } from 'react'
import { CustomerProductContext } from '../products/CustomerProductProvider'
import { ProductContext } from '../products/ProductProvider'
import { CustomerContext } from './CustomerProvider'
import { OrderCard } from './OrderCard'

export const OrderList = () => {
    const { customerId, customerOrder, setCustomerOrder } = useContext(CustomerContext)
    const { products, getProducts } = useContext(ProductContext)
    const { customerProducts, getCustomerProducts } = useContext(CustomerProductContext)

    useEffect(() => {
        getCustomerProducts()
            .then(getProducts)
    }, [])

    useEffect(() => {
        const thisCustomersProducts = customerProducts.filter(cP => cP.customerId === customerId)
        setCustomerOrder(thisCustomersProducts)
    }, [products, customerProducts])

    return (
        <section className="customerOrder">
            {console.log(customerOrder)}
            <h2 className="customerOrder__title">Your Order</h2>
            {
                products.map(prod => {
                    const count = customerOrder.filter(item => item.productId === prod.id).length
                    if (count > 0) return <OrderCard key={prod.id} name={prod.name} count={count} price={prod.price} />
                })
            }
        </section>
    )
}