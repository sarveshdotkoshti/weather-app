import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Weather from './pages/Weather';
import Report from './pages/Report';
import Signup from './pages/Signup';

const App = () => (
  <Router>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/weather' element={<Weather />} />
      <Route path='/report' element={<Report />} />
    </Routes>
  </Router>
);

export default App;
