import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">

            <h2>Transport Allocation System</h2>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/vehicles">Vehicles</Link></li>
                <li><Link to="/drivers">Drivers</Link></li>
                <li><Link to="/request">Transport Request</Link></li>
                <li><Link to="/allocation">Allocation</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>

        </nav>
    )
}

export default Navbar