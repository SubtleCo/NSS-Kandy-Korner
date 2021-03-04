import React, { useContext } from 'react'
import { CustomerContext } from '../customer/CustomerProvider'
import { CustomerProductContext } from './CustomerProductProvider'

export const ProductCard = ({ product, productType }) => {
    const { customerId } = useContext(CustomerContext)
    const { addCustomerProduct } = useContext(CustomerProductContext)

    const purchaseProduct = () => {
        const customerProduct = {
            customerId, 
            productId: product.id
        }
        addCustomerProduct(customerProduct)
    }

    return (
        <article className="product">
            <h2 className="product__name">{product.name}</h2>
            <p className="product__id">Product # {product.id}</p>
            <p className="product__price">Cost: ${product.price}</p>
            <p className="product__type">Product Type: {productType.name}</p>
            <button onClick={purchaseProduct}>Purchase</button>
        </article>
    )

}