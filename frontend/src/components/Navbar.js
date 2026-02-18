import React, { useState, useEffect } from "react"; // Ensure useState/useEffect are imported
import { useNavigate, useLocation } from "react-router-dom"; // Ensure useLocation is imported
import { User, LogOut, ChevronDown, Globe, LayoutDashboard, UserCircle } from "lucide-react";
import "../App.css"; // Ensure CSS path is correct (it might be ./App.css since you are in src/)

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to check current page
  const [showDropdown, setShowDropdown] = useState(false);
  
  // 1. DYNAMIC USER STATE
  // We initialize with "Student" but immediately try to grab the real name
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "Student");

  // 2. LISTEN FOR UPDATES (Optional but safer)
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []); // Runs once when Navbar loads

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="navbar">
       {/* 1. Logo */}
       <div className="logo" onClick={() => navigate("/")} style={{cursor: 'pointer'}}>
          <span style={{color: '#10b981', fontWeight: 'bold', fontSize: '1.5rem'}}>VidyaQuest</span>
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
          <button className="btn-lang-btn">
             <Globe size={18} /> English
          </button>

          {isLoggedIn ? (
            <div className="user-menu-container">
               <button 
                 className="user-pill" 
                 onClick={() => setShowDropdown(!showDropdown)}
               >
                 <User size={18} /> {userName} {/* <--- THIS SHOWS PRAVEEN */}
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