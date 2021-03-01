import React from 'react'

export const EmployeeCard = ({ employee, location }) => {
    return (
        <article className="employee">
            <h3 className="employee__name">{employee.name}{employee.manager ? " -- Manager" : ""}</h3>
            <p className="employee__hourlyRate">Current pay: ${employee.hourlyRate}/hr</p>
            <p className="employee__employment">{employee.fullTime ? "Full" : "Part"} Time</p>
            <p className="employee__location">Works at {location.address}</p>
        </article>
    )
}