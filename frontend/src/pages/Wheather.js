import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
  
    const handleSearch = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post('/weather', { city }, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };
  
    return (
      <div>
        <h2>Weather Search</h2>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {weather && (
          <div>
            <h3>Weather in {city}</h3>
            <p>Temperature: {weather.current.temperature}°C</p>
            <p>Description: {weather.current.weather_descriptions[0]}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Weather;