import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LocationContext } from '../locations/LocationProvider'
import { EmployeeContext } from './EmployeeProvider'

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0,
        manager: false,
        fullTime: false,
        hourlyRate: 0
    })

    const history = useHistory()

    useEffect(() => {
        getLocations()
    }, [])

    const handleControlledInputChange = e => {
        const newEmployee = { ...employee }
        let selectedVal = e.target.value

        if (e.target.id.includes("Id") || e.target.id.includes("Rate")) {
            selectedVal = parseInt(selectedVal)
        }

        if (e.target.type === "checkbox") {
            selectedVal = e.target.checked
        }

        newEmployee[e.target.id] = selectedVal
        
        console.log(newEmployee)
        setEmployee(newEmployee)
    }

    const handleClickSaveEmployee = e => {
        e.preventDefault()

        const locationId = employee.locationId

        if (locationId === 0) {
            window.alert("Please select a location for this employee")
        } else {
            addEmployee(employee)
                .then(() => history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager:</label>
                    <input type="checkbox" id="manager" onChange={handleControlledInputChange} required autoFocus className="form-control" value={employee.manager} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time:</label>
                    <input type="checkbox" id="fullTime" onChange={handleControlledInputChange} required autoFocus className="form-control" value={employee.fullTime} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.address}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly Wage:</label>
                    <input type="number" id="hourlyRate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="0" value={employee.hourlyWage} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveEmployee}>
                Employee
          </button>
        </form>
    )
}