import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { LocationContext } from '../locations/LocationProvider'
import { EmployeeCard } from './EmployeeCard'
import { EmployeeContext } from './EmployeeProvider'

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const history = useHistory()

    useEffect(() => {
        getLocations().then(getEmployees)
    }, [])

    return (
        <section className="employees">
            <h2>Employees</h2>
            <button onClick={() => {history.push("/employees/create")}}>Add Employee</button>
            {
                employees.map(e => {
                    const location = locations.find(l => l.id === e.locationId)
                    return <EmployeeCard key={e.id} employee={e} location={location} />
                })
            }
        </section>
    )
}