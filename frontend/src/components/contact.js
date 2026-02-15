// src/components/contact.js
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We'd love to hear from you!</p>
      </div>

      <div className="contact-container">
        {/* Left Side: Form */}
        <div className="contact-form-card">
          <h2>Send us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="your@email.com" />
              </div>
            </div>
            
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="What's this about?" />
            </div>
            
            <div className="form-group">
              <label>Message *</label>
              <textarea rows="5" placeholder="Your message..."></textarea>
            </div>

            <button className="btn-submit">
              <Send size={18} style={{marginRight:'8px'}}/> Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Info */}
        <div className="contact-info-list">
          <h3>Get in Touch</h3>
          <p className="contact-intro">Whether you have a question about our platform, need technical support, or want to provide feedback, our team is here to help.</p>

          <div className="info-card">
            <div className="info-icon"><Mail size={24} /></div>
            <div>
              <h4>Email</h4>
              <p>contact@vidyaquest.edu</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon"><Phone size={24} /></div>
            <div>
              <h4>Phone</h4>
              <p>+91 1234 567 890</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon"><MapPin size={24} /></div>
            <div>
              <h4>Address</h4>
              <p>Government of Odisha, Electronics & IT Department</p>
            </div>
          </div>

          <div className="info-card info-card-green">
            <div>
              <h4>Response Time</h4>
              <p>We typically respond within 24-48 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}