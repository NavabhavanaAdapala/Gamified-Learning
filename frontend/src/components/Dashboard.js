import React from 'react';
import { FileText, Share2, Target, TrendingUp, CheckCircle, Award } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';
import { useLocation } from 'react-router-dom';
const activityData = [
  { day: '1 Sun', xp: 0 }, { day: '2 Mon', xp: 0 }, { day: '3 Tue', xp: 0 },
  { day: '4 Wed', xp: 0 }, { day: '5 Thu', xp: 0 }, { day: '6 Fri', xp: 0 },
  { day: '7 Sat', xp: 0 }, { day: '8 Sun', xp: 0 }, { day: '9 Mon', xp: 0 },
  { day: '10 Tue', xp: 0 }, { day: '11 Wed', xp: 0 }, { day: '12 Thu', xp: 0 },
  { day: '13 Fri', xp: 0 }, { day: '14 Sat', xp: 0 }
];
export default function Dashboard() {
  const location = useLocation();
  const stats = {
    level: 1,
    xp: 402,
    nextXp: 500,
    quizzes: 9,
    avgScore: 74,
    correct: 29,
    perfect: 4
  };
  

  return (
      
    <div className="dashboard-wrapper">
      <div className="dashboard-top-nav">
        <div className="user-welcome">
          {/* This part dynamically changes the title based on your page URL */}
          <h1>{location.pathname === '/profile' ? 'Profile' : 'My Dashboard'}</h1>
          
          {/* This part removes the hardcoded name and uses your stats data */}
          
        </div>
        
        <div className="nav-action-btns">
          <button className="btn-secondary"><FileText size={18} /> Report</button>
          <button className="btn-secondary"><Share2 size={18} /> Share</button>
        </div>
      </div>
      
      {/* Main Gradient Hero Banner */}
      <div className="hero-stats-banner">
        <div className="level-box">{stats.level}</div>
        <div className="hero-main-info">
          <div className="hero-label-row">
            <h3>Level {stats.level}</h3>
            <span>{stats.xp} / {stats.nextXp} XP to next level</span>
          </div>
          <div className="hero-progress-bg">
            <div 
              className="hero-progress-bar" 
              style={{ width: `${(stats.xp / stats.nextXp) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="hero-quick-metrics">
          <div className="metric"><strong>{stats.xp}</strong> Total XP</div>
          <div className="metric"><strong>0</strong> Day Streak</div>
          <div className="metric"><strong>0</strong> Certificates</div>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="dashboard-nav-tabs">
        <button className="tab-item active">Overview</button>
        <button className="tab-item">Subjects</button>
        <button className="tab-item">Certificates</button>
        <button className="tab-item">Report</button>
      </div>
       {/* --- LEARNING ACTIVITY CHART --- */}
      <div className="dashboard-chart-card">
        <div className="chart-header">
          <TrendingUp size={20} color="#0d9488" />
          <h3>Learning Activity (14 Days)</h3>
        </div>
        <div className="chart-container" style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={activityData}>
              <defs>
                <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} domain={[0, 4]} />
              <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              <Area type="monotone" dataKey="xp" stroke="#2dd4bf" strokeWidth={3} fillOpacity={1} fill="url(#colorXp)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="stats-cards-grid">
        <div className="stat-card-item">
          <div className="stat-icon-wrap green"><Target size={24} /></div>
          <span className="stat-card-val">{stats.quizzes}</span>
          <span className="stat-card-lab">Quizzes</span>
        </div>
        <div className="stat-card-item">
          <div className="stat-icon-wrap blue"><TrendingUp size={24} /></div>
          <span className="stat-card-val">{stats.avgScore}%</span>
          <span className="stat-card-lab">Avg Score</span>
        </div>
        <div className="stat-card-item">
          <div className="stat-icon-wrap purple"><CheckCircle size={24} /></div>
          <span className="stat-card-val">{stats.correct}</span>
          <span className="stat-card-lab">Correct</span>
        </div>
        <div className="stat-card-item">
          <div className="stat-icon-wrap orange"><Award size={24} /></div>
          <span className="stat-card-val">{stats.perfect}</span>
          <span className="stat-card-lab">Perfect</span>
        </div>
      </div>

<footer className="footer">
  <div className="footer-container">
    {/* This 'footer-grid' class is what enables the side-by-side look */}
    <div className="footer-grid">
      
      {/* Column 1: Brand */}
      <div className="footer-brand">
        <div className="logo">
          <span className="logo-icon">🎮</span>
          <span className="logo-text">VidyaQuest</span>
        </div>
        <p>Making quality STEM education accessible and fun for every rural student across India.</p>
      </div>

      {/* Column 2: Quick Links */}
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li>Explore Subjects</li>
          <li>Games</li>
          <li>Leaderboard</li>
        </ul>
      </div>

      {/* Column 3: Support */}
      <div className="footer-links">
        <h4>Support</h4>
        <ul>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Column 4: Contact Us */}
      <div className="footer-links">
        <h4>Contact Us</h4>
        <ul>
          <li>✉️ contact@vidyaquest.edu</li>
          <li>📞 +91 123 4567 890</li>
          <li>📍 Govt of Odisha</li>
        </ul>
      </div>
    </div>
    
    <div className="footer-bottom">
      <p>© 2025 VidyaQuest. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
    
  );
}