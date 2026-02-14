/* frontend/src/components/Profile.js */
import React, { useState, useEffect } from 'react';
import '../Profile.css';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    } else {
      setUser({
        fullName: "Guest User",
        email: "guest@vidyaquest.com",
        level: 1, xp: 0, nextXp: 500
      });
    }
  }, []);

  if (!user) return <div className="loading">Loading...</div>;

  const progressPercent = (user.xp / user.nextXp) * 100;

  return (
    <div className="profile-page-wrapper">
      {/* HEADER WITH GREEN BANNER */}
      <div className="profile-header-card">
        <div className="profile-banner-gradient"></div>
        <div className="profile-info-row">
          <div className="profile-avatar-large">
            <div className="avatar-icon">
              {user.fullName.charAt(0).toUpperCase()}
            </div>
          </div>
          <div className="profile-user-details">
            <h1>{user.fullName}</h1>
            <p>VidyaQuest Learner • {user.email}</p>
          </div>
          <div className="profile-actions">
            <button className="edit-btn">✏️ Edit Profile</button>
            <button className="signout-btn" onClick={() => {localStorage.clear(); window.location.href='/login'}}>
              📤 Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="profile-stats-grid">
        {/* LEVEL PROGRESS CARD */}
        <div className="profile-section-card">
          <div className="section-header">
            <span className="icon">🏆</span> <h3>Level Progress</h3>
          </div>
          <div className="level-card-content">
            <div className="level-badge">{user.level}</div>
            <div className="level-details">
              <div className="level-text">
                Level {user.level} <span>{user.xp} / {user.nextXp} XP</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>
              <p className="xp-left">{user.nextXp - user.xp} XP until Level {user.level + 1}</p>
            </div>
          </div>
        </div>

        {/* BADGES CARD */}
        <div className="profile-section-card">
          <div className="section-header">
            <span className="icon">🏅</span> <h3>Badges</h3>
          </div>
          <div className="badges-empty">
             <div className="badge-placeholder">🎖️</div>
             <p>Complete quizzes to earn badges!</p>
          </div>
        </div>
      </div>

      {/* RECENT ACTIVITY SECTION */}
      <div className="profile-section-card activity-full">
        <div className="section-header">
           <span className="icon">📖</span> <h3>Recent Activity</h3>
        </div>
        <div className="activity-empty">
           <div className="activity-icon-placeholder">📖</div>
           <p>No quizzes completed yet</p>
           <button className="start-btn" onClick={() => window.location.href='/dashboard'}>Start Learning</button>
        </div>
      </div>
    </div>
  );
}