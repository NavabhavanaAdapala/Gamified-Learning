import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gamepad2, Trophy, ArrowLeft } from "lucide-react";
import "./App.css";

export default function Signup() {
  const navigate = useNavigate();

  // 1. Memory for your inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("Grade 6");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 2. Logic to send data to Backend
  const handleSignup = async () => {
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!name || !email || !password) {
        alert("Please fill in all fields");
        return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, grade }), // Sending Grade too!
      });

      const data = await response.json();

      if (response.ok) {
        alert("Account Created Successfully!");
        navigate("/login");
      } else {
        alert(data.message || "Signup Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Is Backend running?");
    }
  };

  return (
    <div className="auth-container">
      {/* Left Side (Orange) - YOUR ORIGINAL UI */}
      <div className="auth-left orange-theme">
        <div className="auth-brand">
          <Gamepad2 size={32} /> VidyaQuest
        </div>
        <div className="auth-left-content">
          <h1 className="auth-title">Start Your <br/> Learning Journey!</h1>
          <p className="auth-desc">Join thousands of students learning STEM through fun games, quizzes, and challenges.</p>
          
          <div className="auth-feature-card">
            <div className="af-icon"><Trophy size={20} color="#f97316"/></div>
            <div>
               <strong>Earn Badges & XP</strong>
               <p>Complete lessons to unlock rewards</p>
            </div>
          </div>

          <div className="auth-feature-card">
            <div className="af-icon"><Gamepad2 size={20} color="#f97316"/></div>
            <div>
               <strong>Play & Learn</strong>
               <p>Fun games that teach STEM concepts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side (Form) - YOUR ORIGINAL UI WITH LOGIC ADDED */}
      <div className="auth-right">
        <div className="back-link" onClick={() => navigate("/")}>
          <ArrowLeft size={16} /> Back to Home
        </div>

        <div className="auth-form-box">
          <h2>Create Account</h2>
          <p className="form-sub">Start your learning journey today!</p>

          <label>Full Name</label>
          <input 
             type="text" 
             placeholder="Enter your name" 
             className="input-field"
             value={name}
             onChange={(e) => setName(e.target.value)} 
          />

          <label>Email</label>
          <input 
             type="email" 
             placeholder="your@email.com" 
             className="input-field"
             value={email}
             onChange={(e) => setEmail(e.target.value)} 
          />

          <label>Grade</label>
          <select 
             className="input-field" 
             value={grade}
             onChange={(e) => setGrade(e.target.value)}
          >
             <option>Grade 6</option>
             <option>Grade 7</option>
             <option>Grade 8</option>
             <option>Grade 9</option>
             <option>Grade 10</option>
             <option>Grade 11</option>
             <option>Grade 12</option>
          </select>

          <label>Password</label>
          <input 
             type="password" 
             placeholder="......." 
             className="input-field"
             value={password}
             onChange={(e) => setPassword(e.target.value)} 
          />

          <label>Confirm Password</label>
          <input 
             type="password" 
             placeholder="......." 
             className="input-field"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)} 
          />

          {/* FIXED BUTTON: Now calls handleSignup instead of just navigating */}
          <button 
             className="btn-auth orange-btn" 
             onClick={handleSignup}
          >
             Create Account
          </button>

          <div className="auth-link-center">
             Already have an account? <span className="link-orange" onClick={() => navigate('/login')}>Sign In</span>
          </div>
        </div>
      </div>
    </div>
  );
}