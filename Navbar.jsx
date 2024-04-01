import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" style={{textDecoration:"none",color:"rgb(38, 102, 191)"}}>Home</Link> 
        <Link to="/careers" style={{textDecoration:"none",color:"rgb(38, 102, 191)"}}>Careers</Link>
        <Link to="/contactus" style={{textDecoration:"none",color:"rgb(38, 102, 191)"}}>Contact Us</Link>
      </nav>
    </div>
  );
};
