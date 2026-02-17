// frontend/src/components/Header.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gamepad2, User, LogOut, LayoutDashboard, ChevronDown, Globe } from 'lucide-react';
import '../App.css'; // Ensure CSS is imported

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState({ name: "Guest", email: "" });

  // 1. Fetch Dynamic User Data on Load
  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // Assuming you saved user details here
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
        // Fallback if just a token exists, you might want to decode it or fetch profile
        // For now, let's default to "Student" if data is missing
        setUser({ name: "Student" }); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="navbar-fixed">
      {/* LEFT: Logo */}
      <div className="logo" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
        <Gamepad2 size={28} strokeWidth={2.5} />
        <span>VidyaQuest</span>
      </div>

      {/* RIGHT: User Controls */}
      <div className="header-right">
        
        {/* Language Selector (Optional based on screenshot) */}
        <button className="btn-icon-text">
            <Globe size={18} /> English <ChevronDown size={14} />
        </button>

        {/* User Profile Dropdown */}
        <div className="user-dropdown-container">
          <button 
            className="btn-user-profile" 
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <User size={18} />
            <span className="user-name">{user.name}</span> {/* DYNAMIC NAME */}
            <ChevronDown size={14} />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => navigate("/profile")}>
                <User size={16} /> Profile
              </div>
              <div className="dropdown-item" onClick={() => navigate("/dashboard")}>
                <LayoutDashboard size={16} /> Dashboard
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item text-red" onClick={handleLogout}>
                <LogOut size={16} /> Sign Out
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;