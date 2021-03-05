import React, { useContext } from 'react'
import { EmployeeContext } from './EmployeeProvider'

export const EmployeeCard = ({ employee, location }) => {
    const { deleteEmployee } = useContext(EmployeeContext)

    const handleFire = () => {
        deleteEmployee(employee.id)
    }

    return (
        <article className="employee">
            <h3 className="employee__name">{employee.name}{employee.manager ? " -- Manager" : ""}</h3>
            <p className="employee__hourlyRate">Current pay: ${employee.hourlyRate}/hr</p>
            <p className="employee__employment">{employee.fullTime ? "Full" : "Part"} Time</p>
            <p className="employee__location">Works at {location.address}</p>
            <button onClick={handleFire}>Fire Employee</button>
        </article>
    )
}