import React from 'react'
import { Route } from 'react-router-dom'
import { OrderList } from './customer/OrderList'
import { CustomerProvider } from './customer/CustomerProvider'
import { EmployeeForm } from './employees/EmployeeForm'
import { EmployeeList } from './employees/EmployeeList'
import { EmployeeProvider } from './employees/EmployeeProvider'
import { Home } from './Home'
import { LocationList } from './locations/LocationList'
import { LocationProvider } from './locations/LocationProvider'
import { CustomerProductProvider } from './products/CustomerProductProvider'
import { ProductList } from './products/ProductList'
import { ProductProvider } from './products/ProductProvider'
import { ProductTypeProvider } from './products/ProductTypeProvider'
import { CustomerList } from './customer/CustomerList'
import { InventorySearch } from './products/InventorySearch'

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/locations">
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
            </Route>

            <Route path="/products">
                <ProductTypeProvider>
                    <ProductProvider>
                        <CustomerProvider>
                            <CustomerProductProvider>
                                <InventorySearch />
                                <ProductList />
                            </CustomerProductProvider>
                        </CustomerProvider>
                    </ProductProvider>
                </ProductTypeProvider>
            </Route>

            <Route path="/order">
                <CustomerProvider>
                    <ProductProvider>
                        <CustomerProductProvider>
                            <OrderList />
                        </CustomerProductProvider>
                    </ProductProvider>
                </CustomerProvider>
            </Route>

            <Route exact path="/employees">
                <EmployeeProvider>
                    <LocationProvider>
                        <EmployeeList />
                    </LocationProvider>
                </EmployeeProvider>
            </Route>

            <Route path="/employees/create">
                <EmployeeProvider>
                    <LocationProvider>
                        <EmployeeForm />
                    </LocationProvider>
                </EmployeeProvider>
            </Route>

            <Route path="/customers">
                <CustomerProvider>
                    <CustomerProductProvider>
                        <CustomerList />
                    </CustomerProductProvider>
                </CustomerProvider>
            </Route>

        </>
    )
}