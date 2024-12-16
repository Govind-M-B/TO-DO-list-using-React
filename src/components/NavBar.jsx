import React, { useState } from 'react';
import './NavBar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavBar = () => {
  // Array of navigation items
  const navItems = [
    { name: "Workspaces", link: "#" },
    { name: "Recent", link: "#" },
    { name: "Starred", link: "#" },
    { name: "Templates", link: "#" },
    { name: "Create", link: "#" }
  ];

  // State to manage mobile menu toggle
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar_main'>
      <nav className="navbar">
        <div className="nav-brand">
          <div className="logo">
            <span className="logo-text">Trello</span>
          </div>
        </div>

        <div className="nav-links">
          {/* Map over the array of navigation items */}
          {navItems.map((item, index) => (
            <a
              href={item.link}
              className={`nav-link ${item.isActive ? "active" : ""}`}
              key={index}
            >
              <span>{item.name}</span>
              <div className="link-effect"></div>
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="action-btn">
            <div className="btn-text">Sign In</div>
            <div className="btn-effect"></div>
          </button>
          <NotificationsIcon className="notification-icon" />
        </div>

        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="menu-header">
          <div className="logo">
            <span className="logo-text">Trello</span>
          </div>
          <button className="close-menu" onClick={toggleMobileMenu}>
            <span className="close-icon"></span>
          </button>
        </div>
        <div className="menu-links">
          {/* Map over the array of navigation items for mobile menu */}
          {navItems.map((item, index) => (
            <a href={item.link} className={`menu-link ${item.isActive ? "active" : ""}`} key={index}>
              <span>{item.name}</span>
            </a>
          ))}
        </div>
        <div className="menu-footer">
          <button className="mobile-action-btn">
            <span>Sign In</span>
          </button>
          <NotificationsIcon className="notification-icon" />
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;
