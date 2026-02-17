import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Edit, LogOut, Trophy, Zap, Flame, BookOpen, Award, X } from "lucide-react";
import Footer from "./Footer"; 
import "../App.css";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false); // Controls Modal
  
  const [userData, setUserData] = useState({
    name: "Srija",
    email: "srija@gmail.com",
    grade: "Grade 10",
    school: "Govt High School",
    xp: 402, streak: 0, quizzes: 9, avgScore: "76%"
  });

  // Modal Form State
  const [editForm, setEditForm] = useState(userData);

  const handleSave = () => {
    setUserData(editForm);
    setIsEditing(false); // Close Modal
  };

  return (
    <div className="page-wrapper">
      
      {/* --- Edit Profile Modal (Overlay) --- */}
      {isEditing && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Edit Profile</h3>
              <X className="close-icon" onClick={() => setIsEditing(false)} />
            </div>
            <div className="modal-body">
              <label>Full Name</label>
              <input type="text" value={editForm.name} onChange={(e) => setEditForm({...editForm, name:e.target.value})} />
              
              <label>Grade</label>
              <select value={editForm.grade} onChange={(e) => setEditForm({...editForm, grade:e.target.value})}>
                <option>Grade 9</option>
                <option>Grade 10</option>
                <option>Grade 11</option>
                <option>Grade 12</option>
              </select>

              <label>School Name</label>
              <input type="text" value={editForm.school} onChange={(e) => setEditForm({...editForm, school:e.target.value})} />
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => setIsEditing(false)}>Cancel</button>
              <button className="btn-save" onClick={handleSave}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* --- Main Profile Content --- */}
      <div className="dashboard-container">
        
        {/* Header Card */}
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
              <button className="btn-signout" onClick={() => navigate("/login")}>
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          <div className="card level-card">
             <div className="card-header"><Trophy color="#10b981" size={20}/> <h3>Level Progress</h3></div>
             <div className="level-row">
               <div className="level-box">1</div>
               <div className="progress-container">
                  <div className="progress-meta"><span>Level 1</span><span>{userData.xp} / 500 XP</span></div>
                  <div className="progress-track"><div className="progress-fill" style={{width: '80%'}}></div></div>
                  <small>98 XP until Level 2</small>
               </div>
             </div>
          </div>
          <div className="card badges-card">
             <div className="card-header"><Award color="#10b981" size={20}/> <h3>Badges</h3></div>
             <div className="badges-content">
                <Award size={40} color="#cbd5e1"/>
                <p>Complete quizzes to earn badges!</p>
             </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-row">
           <div className="d-card stat-c"><Zap color="#10b981" size={28}/><div><h2>{userData.xp}</h2><p>Total XP</p></div></div>
           <div className="d-card stat-c"><Flame color="#f97316" size={28}/><div><h2>{userData.streak}</h2><p>Day Streak</p></div></div>
           <div className="d-card stat-c"><BookOpen color="#3b82f6" size={28}/><div><h2>{userData.quizzes}</h2><p>Quizzes Done</p></div></div>
           <div className="d-card stat-c"><Award color="#10b981" size={28}/><div><h2>{userData.avgScore}</h2><p>Avg Score</p></div></div>
        </div>

      </div>
      <Footer onNavigate={(path) => navigate(`/${path}`)} />
    </div>
  );
};

export default Profile;