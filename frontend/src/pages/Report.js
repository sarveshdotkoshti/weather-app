import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Report = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/weather/report', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLogs(response.data);
      } catch (error) {
        console.error('Error fetching report:', error);
      }
    };

    fetchReport();
  }, []);
  
  return (
    <div>
      <h2>Weather Search Report</h2>
      <table border="1">
        <thead>
          <tr>
            <th>User</th>
            <th>City</th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.user}</td>
              <td>{log.city}</td>
              <td>{log.weather}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;