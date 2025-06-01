import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';

import Signup from '../pages/Signup';  // This must exist
import Signin from '../pages/Login'; 

import Contact from '../pages/Dashboard/Contact';
import Menu from '../pages/Dashboard/Menu';
// Add other imports as needed

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            {/* Add other routes here */}
        </Routes>
    );
}
