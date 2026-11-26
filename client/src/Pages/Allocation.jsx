
import './Allocation.css'

const Allocation = () => {
    return (
        <div className="allocation-container">

            <h2>Transport Allocation</h2>
            <p>Allocate vehicles and drivers to transport requests.</p>

            <form className="allocation-form">

                <div>
                    <label>Request ID:</label>
                    <input
                        type="text"
                        placeholder="Enter Request ID"
                        required
                    />
                </div>

                <div>
                    <label>Select Vehicle:</label>
                    <select required>
                        <option value="">Choose Vehicle</option>
                        <option>Bus</option>
                        <option>Car</option>
                        <option>Truck</option>
                        <option>Van</option>
                    </select>
                </div>

                <div>
                    <label>Select Driver:</label>
                    <select required>
                        <option value="">Choose Driver</option>
                        <option>Driver 1</option>
                        <option>Driver 2</option>
                        <option>Driver 3</option>
                    </select>
                </div>

                <div>
                    <label>Allocation Date:</label>
                    <input type="date" required />
                </div>

                <button type="submit">Allocate Vehicle</button>

            </form>

        </div>
    )
}

export default Allocation