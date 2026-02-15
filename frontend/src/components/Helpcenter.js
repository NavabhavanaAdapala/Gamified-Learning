// src/components/Helpcenter.js
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, User, Gamepad2, Bot, Trophy, Languages, Wifi } from 'lucide-react';

const faqData = [
  {
    sectionTitle: "Getting Started",
    icon: <BookOpen size={24} color="#10b981" />,
    bgColor: "#ecfdf5",
    questions: [
      {
        id: "gs1",
        question: "How do I create an account?",
        answer: "Click the \"Sign Up\" button on the homepage, enter your email and create a password. You can start learning immediately after signing up!"
      },
      {
        id: "gs2",
        question: "Is VidyaQuest free to use?",
        answer: "Yes, VidyaQuest is completely free for all students in grades 6-12. Our mission is to make quality STEM education accessible to everyone."
      },
      {
        id: "gs3",
        question: "What subjects are available?",
        answer: "We currently offer courses in Mathematics, Science (Physics, Chemistry, Biology), and Technology, with more subjects being added regularly."
      }
    ]
  },
  {
    sectionTitle: "Account & Profile",
    icon: <User size={24} color="#0d9488" />,
    bgColor: "#ccfbf1",
    questions: [
      {
        id: "ap1",
        question: "How do I update my profile?",
        answer: "Navigate to your Profile page by clicking on your name in the top right corner. From there, you can edit your details."
      },
      {
        id: "ap2",
        question: "I forgot my password. What should I do?",
        answer: "On the login page, click the 'Forgot Password?' link. Enter your registered email address, and we'll send you instructions to reset your password."
      },
      {
        id: "ap3",
        question: "How do I track my progress?",
        answer: "Your Dashboard provides a comprehensive overview of your progress, including completed lessons, quiz scores, and earned XP."
      }
    ]
  },
  {
    sectionTitle: "Quizzes & Learning",
    icon: <Gamepad2 size={24} color="#f97316" />,
    bgColor: "#ffedd5",
    questions: [
      {
        id: "ql1",
        question: "How do quizzes work?",
        answer: "Each lesson is followed by a interactive quiz to test your understanding. Quizzes consist of multiple-choice questions designed to reinforce key concepts."
      },
      {
        id: "ql2",
        question: "What is XP and how do I earn it?",
        answer: "XP stands for Experience Points. You earn XP by completing lessons, performing well in quizzes, and maintaining daily streaks."
      },
      {
        id: "ql3",
        question: "Can I see explanations for answers?",
        answer: "Absolutely! After submitting a quiz, you can review your answers. Detailed explanations are provided for each question to help you learn from your mistakes."
      }
    ]
  },
  {
    sectionTitle: "AI Tutor",
    icon: <Bot size={24} color="#8b5cf6" />,
    bgColor: "#ede9fe",
    questions: [
      {
        id: "at1",
        question: "What is the AI Tutor?",
        answer: "Our AI Tutor is a virtual assistant available 24/7 to answer your questions, explain complex topics, and provide personalized learning support."
      },
      {
        id: "at2",
        question: "Is the AI Tutor available in my language?",
        answer: "Currently, the AI Tutor is best in English, but we are actively working on adding support for Hindi and Telugu to assist you better."
      }
    ]
  },
  {
    sectionTitle: "Rewards & Badges",
    icon: <Trophy size={24} color="#eab308" />,
    bgColor: "#fef9c3",
    questions: [
      {
        id: "rb1",
        question: "How do I earn badges?",
        answer: "Badges are awarded for various achievements, such as completing a subject module, getting a perfect score on a quiz, or hitting a 7-day streak."
      },
      {
        id: "rb2",
        question: "What is the leaderboard?",
        answer: "The leaderboard is a friendly competition where you can see how your total XP compares to other students on the platform."
      },
      {
        id: "rb3",
        question: "What are streaks?",
        answer: "A streak is the number of consecutive days you have logged in and completed at least one learning activity. Keep your streak going to earn bonus XP!"
      }
    ]
  },
  {
    sectionTitle: "Languages",
    icon: <Languages size={24} color="#0ea5e9" />,
    bgColor: "#e0f2fe",
    questions: [
      {
        id: "la1",
        question: "What languages is the platform available in?",
        answer: "You can change the platform's interface language between English, Hindi, and Telugu from the language selector in the top navigation bar."
      },
      {
        id: "la2",
        question: "Are quiz questions available in regional languages?",
        answer: "Yes, a significant portion of our content, including lessons and quizzes, is available in Hindi and Telugu, with more being translated."
      }
    ]
  },
  {
    sectionTitle: "Offline Access",
    icon: <Wifi size={24} color="#d946ef" />,
    bgColor: "#fae8ff",
    questions: [
      {
        id: "oa1",
        question: "Can I use VidyaQuest offline?",
        answer: "Yes! Our mobile app allows you to download lessons and quizzes so you can continue learning even without an internet connection."
      },
      {
        id: "oa2",
        question: "How do I enable offline mode?",
        answer: "In the VidyaQuest app, go to a subject and look for the download icon next to lessons. Once downloaded, they will be available in the 'Offline' tab."
      }
    ]
  }
];

const HelpCenter = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <div className="help-center-page">
      <div className="help-center-header">
        <h1>Help Center</h1>
        <p>Find answers to commonly asked questions about VidyaQuest</p>
      </div>

      <div className="help-center-container">
        {faqData.map((section, index) => (
          <div key={index} className="faq-section">
            <div className="faq-section-header">
              <div className="section-icon" style={{ backgroundColor: section.bgColor }}>
                {section.icon}
              </div>
              <h2>{section.sectionTitle}</h2>
            </div>
            <div className="faq-list">
              {section.questions.map((q) => (
                <div key={q.id} className={`faq-item ${openQuestionId === q.id ? 'open' : ''}`}>
                  <div className="faq-question" onClick={() => toggleQuestion(q.id)}>
                    <span>{q.question}</span>
                    {openQuestionId === q.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  <div className="faq-answer" style={{ maxHeight: openQuestionId === q.id ? '500px' : '0' }}>
                    <div className="faq-answer-content">
                      {q.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Contact Support Section */}
      <div className="contact-support-section">
          <div className="contact-support-card">
              <h2>Still Have Questions?</h2>
              <p>Can't find what you're looking for? Our support team is here to help you.</p>
              <button className="btn-primary" onClick={() => window.location.href='/contact'}>Contact Support</button>
          </div>
      </div>

    </div>
  );
};

export default HelpCenter;