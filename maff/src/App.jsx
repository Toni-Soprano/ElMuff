import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth/Login';
import Register from './components/Auth/Register';
import Carousel from './components/Carousel';
import Profile from './components/settings/profile';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Auth/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
       </Routes>
    </Router>
  );
}

export default App;
