import React, { useState, useEffect } from 'react';
import { FaBars, FaPlay } from 'react-icons/fa';
import { FaRegBell } from "react-icons/fa";
import'../styles/header.css';
import Menu from '../common/Menu';
import useResizer from '../CustomHooks/useResizer';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width, height } = useResizer();
  const toggleMenu = () => {
    if (width <= 1024) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <header>
      <div className="header-container">
            <div className="logo">
              <span>LOGO</span>
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
              <FaBars  style={{color: isMenuOpen?'#6edbf7':'unset'}} />
            </div>

            {isMenuOpen && width <= 1024 && (
              <Menu/>
            )}

            <div className="right-section">

                <div className='play-btn'>
                    <FaPlay/>
                </div>

                <button className="notification-btn">
                  <FaRegBell />
                </button>

                <div className="profile-section">
                  <img 
                    src="/path-to-avatar.jpg" 
                    alt="Profile" 
                    className="avatar"
                  />
                  <span className="username">Paddy Avate</span>
                  <svg 
                    className="dropdown-arrow"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
            </div>

      </div>
    </header>
  );
};

export default Header;
