const axios = require('axios');

let logs = []; // Replace with database implementation

exports.searchWeather = async (req, res) => {
  const { city } = req.body;
  const response = await axios.get(`http://api.weatherstack.com/current`, {
    params: { access_key: 'your_api_key', query: city },
  });
  logs.push({ user: req.user, city, weather: response.data });
  res.json(response.data);
};

exports.getReport = (req, res) => {
  res.json(logs);
};
