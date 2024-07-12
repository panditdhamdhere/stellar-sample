import React from "react";
import transport from './transport.png';
import source from './src-dest.png';
import Logo from "./logo.svg";
import './Home.css'
import {
  FaWallet,
  FaUser,
  FaMapMarkerAlt,
  FaUpload,
  FaRuler,
  FaTicketAlt
} from "react-icons/fa";


function Home() {
  return (
    <div className="Home">
      <header className="header-part">
        <div className="logo-container">
          <img src={Logo} className="logo" alt="GreenStride Logo" />
          <h1 className="logo-text">GreenStride</h1>
        </div>
        <div className="home-header-buttons">
          <button className="home-header-button">
            <FaWallet /> Connect Wallet
          </button>
          <button className="home-header-button">
            <FaUser /> Account
          </button>
        </div>
      </header>
      <div className="home-container">
        <div className="home-main">
          <div className="left-side">
            <h1>Embrace Green Energy and Public Transport for a Sustainable Future</h1>
            <p className="subtitle">Join us in promoting environmental awareness and reducing carbon footprint.</p>
            <img src={transport} alt="Green public transport" className="main-image"/>
          </div>
          <div className="right-side">
            <h2>Plan Your Green Journey</h2>
            <div className="input-group">
              <FaMapMarkerAlt className="icon destination-icon" />
              <input type="text" placeholder="Enter your destination" />
            </div>
            <div className="route">
              <img src={source} alt="Route visualization" />
            </div>
            <div className="input-group">
              <FaMapMarkerAlt className="icon source-icon" />
              <input type="text" placeholder="Enter your starting point" />
            </div>
            <div className="input-group">
              <FaRuler className="icon" />
              <input type="text" placeholder="Distance traveled in KM" />
            </div>
            <div className="input-group">
              <FaTicketAlt className="icon" />
              <input type="text" placeholder="Enter your ticket ID" />
            </div>
            <div className="input-group file-upload">
              <label className="label">Upload Ticket Price</label>
              <input type="file" id="ticket-upload" />
              <label htmlFor="ticket-upload" className="file-upload-label">
                <FaUpload className="icon" /> Choose File
              </label>
            </div>
            <button className="claim-button">Claim Your Green Reward</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;