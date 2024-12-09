const express = require('express');
const router = express.Router();
const { searchWeather, getReport } = require('../controllers/weather');

router.post('/', searchWeather);
router.get('/report', getReport);

module.exports = router;
