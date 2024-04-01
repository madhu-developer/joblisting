import React from 'react';
import homepageimg from "./homepageimg.png";
import "./Homepage.css";
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div className="home-page-main-section">
        <div>
        <h1 className="home-page-heading">Step ahead in your <br/>
        career Now...</h1>
        <Link to="/careers"><button className="get-started-button">Get Started</button></Link>
        </div>
        <img src={homepageimg} alt="office" className="home-page-image"/> 
      </div>
    </div>
  );
};
