import React from 'react'
import './Location.css'

export const LocationCard = ({location}) => {
    return (
        <div className="location">
            <h2 className="location__address">{location.address}</h2>
            <p className="location__size">Size: {location.size} sq ft</p>
            <p className="location__accesible"> {location.accessible ? "" : "Not"} Handicap Accessible</p>
        </div>
    )
}