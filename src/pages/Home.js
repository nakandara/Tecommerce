import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from '../assets/t4.jpg';
import "../style/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Best Collection </h1>
        <p> Fashion That’s Made for You </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

