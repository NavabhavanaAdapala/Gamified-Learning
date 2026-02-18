// frontend/src/components/Footer.js
import React from 'react';
import { Gamepad2, Mail, Phone, MapPin } from 'lucide-react';
import '../App.css'; // Ensure styling is available

const Footer = ({ onNavigate }) => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
                                                              
        {/* Column 1: Brand */}
        <div className="footer-col">
          <div className="footer-logo">
            <Gamepad2 size={24} /> VidyaQuest
          </div>
          <p className="footer-text">
            Making quality STEM education accessible and fun for every rural student across India.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li onClick={() => onNavigate("subjects")}>Explore Subjects</li>
            <li onClick={() => onNavigate("games")}>Games</li>
            <li onClick={() => onNavigate("leaderboard")}>Leaderboard</li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul className="footer-links">
            <li onClick={() => onNavigate("contact")}>Contact Us</li>
            <li>FAQ</li>
          </ul>
          <ul className="footer-links">
            <li onClick={() => onNavigate("Helpcenter")}>Help Center</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <Mail size={16} /> <span>contact@vidyaquest.edu</span>
          </div>
          <div className="contact-item">
            <Phone size={16} /> <span>+91 1234 567 890</span>
          </div>
          <div className="contact-item">
            <MapPin size={16} /> <span>Govt of Odisha</span>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>© 2026 VidyaQuest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;