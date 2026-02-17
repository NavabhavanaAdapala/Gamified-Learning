import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Gamepad2, Globe, User, LogOut, LayoutDashboard, UserCircle } from 'lucide-react';
import '../App.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  // Check if user is logged in
  const isLoggedIn = !!localStorage.getItem("token");
  const userName = localStorage.getItem("userName") || "Student";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* 1. Logo */}
      <div className="logo" onClick={() => navigate("/")}>
        <Gamepad2 size={32} strokeWidth={2.5} />
        <span>VidyaQuest</span>
      </div>

      {/* 2. Center Links (Hidden on Login/Signup pages) */}
      {!['/login', '/signup'].includes(location.pathname) && (
        <div className="nav-links">
          <span onClick={() => navigate("/")} className={location.pathname === '/' ? 'active' : ''}>Home</span>
          <span onClick={() => navigate("/subjects")}>Subjects</span>
          <span onClick={() => navigate("/games")}>Games</span>
          <span onClick={() => navigate("/leaderboard")}>Leaderboard</span>
        </div>
      )}

      {/* 3. Right Side: Auth Buttons or User Dropdown */}
      <div className="auth-buttons">
        <button className="lang-btn">
            <Globe size={18} /> English
        </button>

        {isLoggedIn ? (
          <div className="user-menu-container">
            <button 
                className="user-pill" 
                onClick={() => setShowDropdown(!showDropdown)}
            >
              <User size={18} /> {userName}
            </button>

            {/* The Dropdown Menu */}
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => navigate("/profile")}>
                    <UserCircle size={16} /> Profile
                </div>
                <div className="dropdown-item" onClick={() => navigate("/dashboard")}>
                    <LayoutDashboard size={16} /> Dashboard
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item logout" onClick={handleLogout}>
                    <LogOut size={16} /> Sign Out
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Show these if NOT logged in */
          <>
            <button className="btn-nav-login" onClick={() => navigate("/login")}>Sign In</button>
            <button className="btn-nav-signup" onClick={() => navigate("/signup")}>Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;