

import React from 'react';
import './Drivers.css';

const Drivers = () => {
  const drivers = [
    {
      id: 'D101',
      name: 'Rahul',
      license: 'DL12345',
      phone: '9876543210',
      status: 'Available'
    },
    {
      id: 'D102',
      name: 'Amit',
      license: 'DL23456',
      phone: '9876543211',
      status: 'Allocated'
    },
    {
      id: 'D103',
      name: 'Rohit',
      license: 'DL34567',
      phone: '9876543212',
      status: 'Available'
    }
  ];

  return (
    <div className="drivers-container">
      <h2>Driver Management</h2>
      <p>View driver details and availability.</p>

      <table className="driver-table">
        <thead>
          <tr>
            <th>Driver ID</th>
            <th>Name</th>
            <th>License Number</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{driver.id}</td>
              <td>{driver.name}</td>
              <td>{driver.license}</td>
              <td>{driver.phone}</td>
              <td>
                <span className={`status ${driver.status.toLowerCase()}`}>
                  {driver.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Drivers;
