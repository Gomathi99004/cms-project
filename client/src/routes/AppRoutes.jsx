import Home from '../pages/Home';        
import Login from '../pages/Login';      
import Contact from '../pages/Dashboard/Contact';  
import Menu from '../pages/Dashboard/Menu';        

import { Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default AppRoutes;
