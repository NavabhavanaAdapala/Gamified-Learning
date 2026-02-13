import React, { useState } from "react";
import { 
  Zap, Flame, BookOpen, Award, Download, Share2, 
  Target, CheckCircle, TrendingUp 
} from "lucide-react";
import "../App.css";

export default function Dashboard({ user }) {
  const [activeTab, setActiveTab] = useState("overview");

  const subjectStats = [
    { name: "Mathematics", quizzes: 6, accuracy: 74, xp: 282, color: "#10b981" },
    { name: "Physical Education", quizzes: 1, accuracy: 100, xp: 50, color: "#10b981" },
    { name: "Social Studies", quizzes: 1, accuracy: 67, xp: 33, color: "#f97316" },
    { name: "Science", quizzes: 1, accuracy: 50, xp: 37, color: "#f97316" }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header-row">
        <div>
           <h1>My Dashboard</h1>
           <p style={{color: '#64748b', margin: '5px 0'}}>
             Welcome, {user?.name || 'Student'}! • Grade {user?.grade || '10'}
           </p>
        </div>
        <div style={{display: 'flex', gap: '10px'}}>
           <button className="btn-secondary" style={{fontSize: '0.9rem'}}><Download size={16}/> Report</button>
           <button className="btn-secondary" style={{fontSize: '0.9rem'}}><Share2 size={16}/> Share</button>
        </div>
      </div>

      <div className="level-banner-large">
        <div className="level-badge-large">1</div>
        <div className="level-progress-info">
          <h3 style={{margin: 0, fontSize: '1.5rem'}}>Level 1</h3>
          <p style={{margin: '5px 0', opacity: 0.9}}>402 / 500 XP to next level</p>
          <div className="progress-bg"><div className="progress-fill" style={{width: '80%'}}></div></div>
          <span style={{fontSize: '0.85rem', opacity: 0.8}}>98 XP until Level 2</span>
        </div>
        <div className="banner-stats-right">
          <div className="stat-unit"><strong>402</strong>Total XP</div>
          <div className="stat-unit"><strong>0</strong>Day Streak</div>
          <div className="stat-unit"><strong>2</strong>Certificates</div>
        </div>
      </div>

      <div className="dash-tabs">
        {["overview", "subjects", "certificates", "report"].map((tab) => (
          <button key={tab} className={`tab-btn ${activeTab === tab ? "active" : ""}`} onClick={() => setActiveTab(tab)}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <>
          <div className="stats-grid">
            <OverviewStat icon={<Target/>} color="#dcfce7" textColor="#16a34a" label="Quizzes" val="9" />
            <OverviewStat icon={<TrendingUp/>} color="#dbeafe" textColor="#2563eb" label="Avg Score" val="74%" />
            <OverviewStat icon={<CheckCircle/>} color="#f3e8ff" textColor="#9333ea" label="Correct" val="29" />
            <OverviewStat icon={<Award/>} color="#ffedd5" textColor="#ea580c" label="Perfect" val="4" />
          </div>
          <div className="activity-card">
             <h3>Learning Activity (14 Days)</h3>
             <div className="chart-placeholder">Chart Visualization Area</div>
          </div>
        </>
      )}

      {activeTab === "subjects" && (
        <div className="subject-progress-grid">
          {subjectStats.map((sub, idx) => (
            <div key={idx} className="sub-progress-card">
              <div className="sub-card-header">
                <div><h4>{sub.name}</h4><span style={{fontSize: '0.85rem'}}>{sub.quizzes} quizzes</span></div>
                <div className="accuracy-tag">{sub.accuracy}%</div>
              </div>
              <div className="progress-bg" style={{height: '8px'}}><div className="progress-fill" style={{width: `${sub.accuracy}%`, background: sub.color}}></div></div>
              <div style={{textAlign: 'right', fontSize: '0.85rem', marginTop: '8px', color: sub.color, fontWeight: '700'}}>{sub.xp} XP Earned</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function OverviewStat({ icon, color, textColor, label, val }) {
  return (
    <div className="stat-box">
      <div className="stat-icon-circle" style={{ background: color, color: textColor }}>{icon}</div>
      <div><h2>{val}</h2><span style={{ color: '#64748b', fontSize: '0.85rem' }}>{label}</span></div>
    </div>
  );
}