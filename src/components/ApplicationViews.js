import React from 'react'
import { Route } from 'react-router-dom'
import { CustomerProdivder } from './customer/CustomerProvider'
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

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <CustomerProdivder>
                <ProductProvider>
                    <CustomerProductProvider>
                        <ProductTypeProvider>
                            <Route path="/products">
                                <ProductList />
                            </Route>
                        </ProductTypeProvider>
                    </CustomerProductProvider>
                </ProductProvider>
            </CustomerProdivder>

            <EmployeeProvider>
                <LocationProvider>

                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>

                    <Route path="/employees/create">
                        <EmployeeForm />
                    </Route>


                </LocationProvider>
            </EmployeeProvider>


        </>
    )
}