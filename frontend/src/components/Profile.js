import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Edit, LogOut, Award } from "lucide-react";
import Footer from "./footer";
import "../App.css";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // 1. DYNAMIC STATE
  const [userData, setUserData] = useState({
    name: "Srija", // Placeholder
    email: "srija@gmail.com",
    grade: "Grade 10",
    xp: 1402
  });

  // 2. LOAD REAL DATA (Praveen)
  useEffect(() => {
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    const grade = localStorage.getItem("userGrade");

    if (name) {
      setUserData(prev => ({
        ...prev,
        name: name,
        email: email || "No Email",
        grade: grade || "Grade 10"
      }));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="page-wrapper">
      <div className="dashboard-container">
        
        {/* --- THE HEADER (Exact original design) --- */}
        <div className="profile-header-card">
          <div className="profile-banner"></div>
          <div className="profile-info-row">
            <div className="profile-avatar-box">
              <User size={64} color="#10b981" />
            </div>
            
            <div className="profile-text">
              <h1 className="profile-name">{userData.name}</h1>
              <p className="profile-subtext">{userData.grade} • {userData.email}</p>
            </div>

            <div className="profile-buttons">
              <button className="btn-edit" onClick={() => setIsEditing(true)}>
                <Edit size={16} /> Edit Profile
              </button>
              <button className="btn-signout" onClick={handleLogout}>
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* --- LEVEL PROGRESS (Fixed the squashed bar) --- */}
        <div className="card level-card" style={{marginTop: '2rem'}}>
          <div className="card-header">
            <Award color="#10b981" size={20} /> <h3>Level Progress</h3>
          </div>
          <div className="level-box">
            <div className="progress-container">
              <div className="progress-meta">
                <span>1</span>
                <span>Level {userData.xp} / 500 XP</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: '80%' }}></div>
              </div>
              <small>98 XP until Level 2</small>
            </div>
          </div>
        </div>

        {/* --- BADGES (Exact original design) --- */}
        <div className="card badges-card">
          <div className="card-header">
            <Award color="#10b981" size={20} /> <h3>Badges</h3>
          </div>
          <div className="badges-content">
             <div className="empty-badges">
                <Award size={40} color="#cbd5e1" />
                <p>Complete quizzes to earn badges!</p>
             </div>
          </div>
        </div>

      </div>
      <Footer onNavigate={(path) => navigate(`/${path}`)} />
    </div>
  );
};

export default Profile;