import React from 'react'

const Login = () => {
    return (
        <div>
            <h2>Transport Allocation System</h2>
            <h3>Login</h3>

            <form>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <br />

                <button type="submit">Login</button>
            </form>

            <p>Don't have an account? Register here</p>
        </div>
    )
}

export default Login