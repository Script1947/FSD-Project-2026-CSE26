import React from 'react'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="home-container">

            <header className="home-header">
                <h2>Transport Allocation System</h2>
                <p>Smart and Easy Transport Management</p>
            </header>

            <section className="hero-section">
                <h1>Welcome to Transport Allocation System</h1>

                <p>
                    Manage vehicles, drivers and transport requests
                    easily through one platform.
                </p>

                <button>Get Started</button>
            </section>

            <section className="services-section" id="services">
                <h2>Our Services</h2>

                <div className="service-cards">

                    <div className="service-card">
                        <h3>Vehicle Management</h3>
                        <p>Manage and view available vehicles.</p>
                    </div>

                    <div className="service-card">
                        <h3>Driver Management</h3>
                        <p>Manage driver details and information.</p>
                    </div>

                    <div className="service-card">
                        <h3>Transport Requests</h3>
                        <p>Submit and manage transport requests.</p>
                    </div>

                </div>
            </section>

            <footer className="home-footer">
                <p>© 2026 Transport Allocation System</p>
                <p>Developed by CSE Students</p>
            </footer>

        </div>
    )
}

export default HomePage