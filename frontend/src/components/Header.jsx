import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { 
  FaHome, 
  FaSearch, 
  FaCompass, 
  FaVideo, 
  FaNewspaper, 
  FaBell, 
  FaPlusSquare, 
  FaUser,
  FaHeadset
} from 'react-icons/fa';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Expand sidebar when mouse is within 300px from left edge
      if (window.innerWidth > 900) {
        if (e.clientX <= 300) {
          setIsExpanded(true);
        } else if (e.clientX > 300) {
          setIsExpanded(false);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const menuItems = [
    { name: 'Home', icon: <FaHome />, path: '/' },
    { name: 'Search', icon: <FaSearch />, path: '/search' },
    { name: 'Explore', icon: <FaCompass />, path: '/explore' },
    { name: 'Reels', icon: <FaVideo />, path: '/reels' },
    { name: 'Articles', icon: <FaNewspaper />, path: '/articles' },
    { name: 'Notifications', icon: <FaBell />, path: '/notifications', badge: 3 },
    { name: 'Create', icon: <FaPlusSquare />, path: '/create' },
    { name: 'Profile', icon: <FaUser />, path: '/profile' },
  ];

  return (
    <>
      {/* Mobile Top Navbar (below 900px) */}
      <div className="mobile-topbar">
        <div className="mobile-topbar-content">
          <h2 className="mobile-logo">ForBharat</h2>
          
          <div className="mobile-actions">
            <NavLink to="/search" className="mobile-icon">
              <FaSearch />
            </NavLink>
            <NavLink to="/profile" className="mobile-icon">
              <FaUser />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar (above 900px) */}
      <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
        <div className="sidebar-header">
          <h2 className="logo">{isExpanded ? 'ForBharat' : 'FB'}</h2>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="nav-text">{item.name}</span>
                  {item.badge && <span className="badge">{item.badge}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <NavLink to="/contact" className="contact-link">
            <span className="icon"><FaHeadset /></span>
            <span className="nav-text">Contact Team</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
