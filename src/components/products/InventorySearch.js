import React, { useContext } from 'react'
import { ProductContext } from './ProductProvider'

export const InventorySearch = () => {
    const { setSearchQuery } = useContext(ProductContext)

    return (
        <>
            Product Search:
            <input type="text"
                className="input"
                onKeyUp={e => setSearchQuery(e.target.value)}
                placeholder="Search for a product..." />
        </>
    )

}