import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gamepad2, ArrowLeft, Eye, EyeOff } from "lucide-react";
import "./App.css";

export default function Login({ onSuccess }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (onSuccess) onSuccess(); 
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      {/* LEFT SIDE: Teal Gradient Background */}
      <div className="auth-left teal-theme">
        {/* Logo at absolute top-left */}
        <div className="auth-brand">
          <Gamepad2 size={32} /> VidyaQuest
        </div>
        
        {/* Content Wrapper to create gap from logo */}
        <div className="auth-left-content">
            <h1 className="auth-title">
              Continue Your <br/> Learning Adventure!
            </h1>
            
            <p className="auth-desc">
              Pick up where you left off. Your progress, badges, and achievements are waiting for you.
            </p>
           
            {/* Stats Boxes */}
            <div className="stats-mini-row">
               <div className="mini-stat">
                 <strong>500+</strong>
                 <span>Active Learners</span>
               </div>
               <div className="mini-stat">
                 <strong>10K+</strong>
                 <span>Lessons Done</span>
               </div>
            </div>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="auth-right">
        {/* Back Link */}
        <div style={{ width: '100%', maxWidth: '400px', marginBottom: '1rem' }}>
            <div className="back-link" onClick={() => navigate("/")}>
                <ArrowLeft size={16} /> Back to Home
            </div>
        </div>

        <div className="auth-form-box">
          <h2 style={{marginBottom:'0.5rem'}}>Welcome Back!</h2>
          <p className="form-sub" style={{marginBottom:'2rem'}}>Sign in to continue your learning adventure</p>

          <form onSubmit={handleLogin}>
              <label>Email</label>
              <input type="email" placeholder="your@email.com" className="input-field" required />

              {/* Password Section */}
              <label style={{marginTop:'1.2rem'}}>Password</label>
              <div style={{position:'relative'}}>
                 <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="........" 
                    className="input-field" 
                    required 
                 />
                 <div 
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                        position:'absolute', 
                        right:'15px', 
                        top:'14px', 
                        cursor:'pointer',
                        color: '#94a3b8'
                    }}
                 >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                 </div>
              </div>

              {/* Forgot Password - MOVED HERE (Under Input, Right Aligned) */}
              <span className="forgot-pass-link">Forgot Password?</span>

              {/* Sign In Button */}
              <button type="submit" className="btn-auth btn-teal" style={{marginTop:'2rem'}}>
                  Sign In
              </button>
          </form>

          <div className="auth-link" style={{marginTop: '1.5rem', textAlign: 'center', fontSize:'0.95rem', color:'#64748b'}}>
            Don't have an account? <span style={{color: '#10b981', fontWeight: 'bold', cursor: 'pointer'}} onClick={() => navigate("/signup")}>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
}