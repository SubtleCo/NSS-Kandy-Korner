import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link classname="navbar__link" to="/">NSS Kandy Korner</Link>
            </li>
            <li className="navbar__item">
                <Link classname="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link classname="navbar__link" to="/products">Products</Link>
            </li>
        </ul>
    )
}