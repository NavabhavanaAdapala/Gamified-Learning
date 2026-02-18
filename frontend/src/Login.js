import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gamepad2, ArrowLeft, Eye, EyeOff } from "lucide-react";
import "./App.css";

export default function Login({ onSuccess }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:4000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        // CHECK 1: Did the server say OK?
        if (response.ok) {
            localStorage.setItem('token', data.token);
            
            // CHECK 2: Does the user data actually exist?
            if (data.user && data.user.name) {
                localStorage.setItem('userName', data.user.name);
            } else {
                localStorage.setItem('userName', 'Student');
            }
            
            alert("Login Successful!");
            if(onSuccess) onSuccess(); 
            navigate("/dashboard");   
        } else {
            // If server says "User not found", show THAT message (don't crash!)
            alert(data.message || "Invalid Email or Password");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Server error. Is the backend running?");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left teal-theme">
        <div className="auth-brand">
          <Gamepad2 size={32} /> VidyaQuest
        </div>
        <div className="auth-left-content">
          <h1 className="auth-title">Welcome Back!</h1>
          <p className="auth-desc">Pick up where you left off.</p>
        </div>
      </div>

      <div className="auth-right">
        <div style={{ width: '100%', maxWidth: '400px', marginBottom: '1rem' }}>
           <div className="back-link" onClick={() => navigate("/")}>
             <ArrowLeft size={16} /> Back to Home
           </div>
        </div>

        <div className="auth-form-box">
          <h2>Sign In</h2>
          <p className="form-sub" style={{marginBottom:'2rem'}}>Continue your learning adventure</p>

          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="input-field" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label style={{marginTop:'1.2rem'}}>Password</label>
            <div style={{position:'relative'}}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="........"
                className="input-field"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div 
                onClick={() => setShowPassword(!showPassword)}
                style={{position: 'absolute', right: '15px', top: '14px', cursor: 'pointer', color: '#94a3b8'}}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>

            <button type="submit" className="btn-auth btn-teal" style={{marginTop:'2rem'}}>
              Sign In
            </button>
          </form>

          <div className="auth-link" style={{marginTop: '1.5rem', textAlign: 'center'}}>
             Don't have an account? <span style={{color: '#10b981', fontWeight: 'bold', cursor: 'pointer'}} onClick={() => navigate('/signup')}>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
}