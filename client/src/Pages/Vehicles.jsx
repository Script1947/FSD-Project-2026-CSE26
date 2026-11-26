
import './Vehicles.css'

const Vehicles = () => {
    return (
        <div className="vehicles-container">

            <h2>Vehicle Management</h2>
            <p>View and manage available vehicles.</p>

            <button className="add-vehicle-btn">Add Vehicle</button>

            <table className="vehicle-table">
                <thead>
                    <tr>
                        <th>Vehicle ID</th>
                        <th>Vehicle Name</th>
                        <th>Vehicle Type</th>
                        <th>Capacity</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>V101</td>
                        <td>Swift Dzire</td>
                        <td>Car</td>
                        <td>4</td>
                        <td>Available</td>
                    </tr>

                    <tr>
                        <td>V102</td>
                        <td>Traveller</td>
                        <td>Van</td>
                        <td>12</td>
                        <td>Available</td>
                    </tr>

                    <tr>
                        <td>V103</td>
                        <td>Volvo Bus</td>
                        <td>Bus</td>
                        <td>40</td>
                        <td>Allocated</td>
                    </tr>

                    <tr>
                        <td>V104</td>
                        <td>Tata Truck</td>
                        <td>Truck</td>
                        <td>10 Ton</td>
                        <td>Available</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Vehicles