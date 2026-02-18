// frontend/src/components/Header.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gamepad2, User, LogOut, LayoutDashboard, ChevronDown, Globe } from 'lucide-react';
import '../App.css'; // Ensure CSS is imported

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState({ 
  name: localStorage.getItem("userName") || "Student", 
  email: localStorage.getItem("userEmail") || "" 
});

// 1. Fetch Dynamic User Data on Load
  useEffect(() => {
    // ⬇️ WE CHANGED THIS LINE TO MATCH PROFILE.JS ⬇️
    const savedName = localStorage.getItem("userName"); 
    const savedEmail = localStorage.getItem("userEmail");

    if (savedName) {
      // Use the simple string we found in memory
      setUser({ 
        name: savedName, 
        email: savedEmail || "" 
      });
    } else {
      // Fallback if no one is logged in
      setUser({ name: "Student", email: "" });
    }
  }, []);
 

 const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName"); // ⬅️ Add this line
    localStorage.removeItem("userEmail"); // ⬅️ Add this line
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
            <span className="user-name">{user.name}</span>{/* DYNAMIC NAME */}
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