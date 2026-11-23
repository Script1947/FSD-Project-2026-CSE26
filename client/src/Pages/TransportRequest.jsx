import React from 'react'
import './TransportRequest.css'

const TransportRequest = () => {
    return (
        <div className="request-container">

            <h2>Transport Request</h2>
            <p>Fill the details to request a vehicle.</p>

            <form className="request-form">

                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div>
                    <label>Source Location:</label>
                    <input
                        type="text"
                        placeholder="Enter source location"
                        required
                    />
                </div>

                <div>
                    <label>Destination:</label>
                    <input
                        type="text"
                        placeholder="Enter destination"
                        required
                    />
                </div>

                <div>
                    <label>Travel Date:</label>
                    <input type="date" required />
                </div>

                <div>
                    <label>Number of Passengers:</label>
                    <input
                        type="number"
                        min="1"
                        placeholder="Enter passengers"
                        required
                    />
                </div>

                <div>
                    <label>Vehicle Type:</label>
                    <select required>
                        <option value="">Select Vehicle</option>
                        <option>Car</option>
                        <option>Bus</option>
                        <option>Van</option>
                        <option>Truck</option>
                    </select>
                </div>

                <div>
                    <label>Purpose:</label>
                    <textarea
                        placeholder="Enter purpose of transport"
                        rows="3"
                        required
                    ></textarea>
                </div>

                <button type="submit">Submit Request</button>

            </form>

        </div>
    )
}

export default TransportRequest