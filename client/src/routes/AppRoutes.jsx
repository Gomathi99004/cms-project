import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Menu from '../pages/Menu';
// Add other imports as needed

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            {/* Add other routes here */}
        </Routes>
    );
}
