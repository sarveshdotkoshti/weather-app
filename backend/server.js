const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const weatherRoutes = require('./routes/weather');

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/weather', weatherRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
