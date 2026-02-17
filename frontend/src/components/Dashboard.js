import React, { useState } from "react";
import { 
  Trophy, Zap, BookOpen, Star, Share2, FileText, CheckCircle, Clock 
} from "lucide-react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from "recharts";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy Data for the Chart (Matches video visual)
  const activityData = [
    { day: "4 Tue", xp: 0 }, { day: "5 Wed", xp: 20 }, { day: "6 Thu", xp: 15 },
    { day: "7 Fri", xp: 40 }, { day: "8 Sat", xp: 10 }, { day: "9 Sun", xp: 0 },
    { day: "10 Mon", xp: 60 }, { day: "11 Tue", xp: 50 }, { day: "12 Wed", xp: 80 }
  ];

  const recentQuizzes = [
    { id: 1, title: "Basic Addition", date: "01/01/2026", score: "5/6", xp: "+50 XP", color: "#10b981" },
    { id: 2, title: "Sports Rules", date: "01/01/2026", score: "4/6", xp: "+40 XP", color: "#f59e0b" },
    { id: 3, title: "Indian History Basics", date: "01/01/2026", score: "2/3", xp: "+30 XP", color: "#ef4444" },
    { id: 4, title: "Fractions Fun", date: "01/01/2026", score: "5/5", xp: "+100 XP", color: "#10b981" }
  ];

  return (
    <div className="page-wrapper">
      <div className="dashboard-container">
        
        {/* Header Section */}
        <div className="dashboard-header">
          <div>
            <h1>My Dashboard</h1>
            <p className="welcome-text">Welcome, <span className="highlight-text">Srija</span> • Grade 10</p>
          </div>
          <div className="header-actions">
            <button className="btn-outline"><FileText size={16}/> Report</button>
            <button className="btn-outline"><Share2 size={16}/> Share</button>
          </div>
        </div>

        {/* Level Banner (Green) */}
        <div className="level-banner">
          <div className="level-circle">1</div>
          <div className="level-info">
            <h3>Level 1</h3>
            <div className="level-bar-bg">
               <div className="level-bar-fill" style={{width: '80%'}}></div>
            </div>
            <p>402 / 500 XP to next level</p>
          </div>
          <div className="level-stats">
            <div className="l-stat"><strong>402</strong><span>Total XP</span></div>
            <div className="l-stat"><strong>0</strong><span>Day Streak</span></div>
            <div className="l-stat"><strong>2</strong><span>Certificates</span></div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="dashboard-tabs">
          {["Overview", "Subjects", "Certificates", "Report"].map((tab) => (
            <button 
              key={tab} 
              className={`tab-btn ${activeTab === tab.toLowerCase() ? "active" : ""}`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="tab-content fade-in">
            
            {/* 4 Stats Cards */}
            <div className="stats-row">
              <div className="d-card stat-c">
                <div className="icon-box green"><BookOpen size={24} /></div>
                <div><h3>9</h3><p>Quizzes</p></div>
              </div>
              <div className="d-card stat-c">
                <div className="icon-box purple"><Trophy size={24} /></div>
                <div><h3>74%</h3><p>Avg Score</p></div>
              </div>
              <div className="d-card stat-c">
                <div className="icon-box blue"><CheckCircle size={24} /></div>
                <div><h3>29</h3><p>Correct</p></div>
              </div>
              <div className="d-card stat-c">
                <div className="icon-box orange"><Star size={24} /></div>
                <div><h3>4</h3><p>Perfect</p></div>
              </div>
            </div>

            {/* Chart & Recent Quizzes */}
            <div className="dashboard-split">
              
              {/* Left: Chart */}
              <div className="d-card chart-section">
                <h3>Learning Activity (14 Days)</h3>
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                    <AreaChart data={activityData}>
                      <defs>
                        <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill:'#94a3b8', fontSize:12}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill:'#94a3b8', fontSize:12}} />
                      <Tooltip contentStyle={{borderRadius:'10px', border:'none', boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}} />
                      <Area type="monotone" dataKey="xp" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorXp)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Right: Recent Quizzes */}
              <div className="d-card quiz-list-section">
                <h3><Clock size={18}/> Recent Quizzes</h3>
                <div className="quiz-list">
                  {recentQuizzes.map((q) => (
                    <div className="quiz-item" key={q.id}>
                      <div className="quiz-icon-wrapper">
                         <CheckCircle size={20} color={q.color} />
                      </div>
                      <div className="quiz-info">
                        <h4>{q.title}</h4>
                        <span>{q.date}</span>
                      </div>
                      <div className="quiz-score">
                        <span style={{color: q.color, fontWeight:'bold'}}>{q.score}</span>
                        <div className="xp-pill">{q.xp}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
      <Footer onNavigate={(path) => navigate(`/${path}`)} />
    </div>
  );
};

export default Dashboard;