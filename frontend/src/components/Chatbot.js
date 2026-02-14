import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import './Chatbot.css'; 

const API = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // NOTE: We are using 'messages' as the variable name here.
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Namaste! 👋 Welcome to VidyaQuest! I am your AI Tutor. How can I help you learn today?" }
  ]);

  // Auto-scroll to bottom logic
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    // 1. Add User Message
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInput('');
    setIsLoading(true);

    try {
      // 2. Connect to Backend
      const res = await axios.post(`${API}/chatbot`, { message: userText });
      const botReply = res.data?.reply || "I'm having trouble connecting to the brain.";
      
      // 3. Add Bot Reply
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    } catch (e) {
      setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, I am offline right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button (Shows when chat is closed) */}
      {!isOpen && (
        <div className="chatbot-trigger" onClick={() => setIsOpen(true)}>
          <MessageCircle size={28} />
        </div>
      )}

      {/* Main Window (Shows when chat is open) */}
      {isOpen && (
        <div className="chatbot-window">
          
          {/* Header */}
          <div className="chat-header">
            <div className="header-info">
              <Bot size={24} />
              <div>
                <span className="header-title">VidyaQuest Agent</span>
                <span className="ai-badge" style={{marginLeft: '8px'}}>AI</span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Messages List */}
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-row ${msg.sender}`}>
                <div className={`avatar ${msg.sender === 'bot' ? 'bot-avatar' : 'user-avatar'}`}>
                  {msg.sender === 'bot' ? <Bot size={18} /> : <User size={18} />}
                </div>
                <div className="bubble">
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {isLoading && (
              <div className="message-row bot">
                <div className="avatar bot-avatar"><Bot size={18} /></div>
                <div className="bubble" style={{ color: '#888', fontStyle: 'italic' }}>
                  <Sparkles size={14} /> Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="chat-input-area">
            <input 
              className="chat-input"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="send-btn" onClick={handleSend}>
              <Send size={18} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}