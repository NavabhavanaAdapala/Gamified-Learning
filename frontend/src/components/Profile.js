import { useEffect, useState } from 'react';



export default function Profile() {

    const [profile, setProfile] = useState(null);

    const [error, setError] = useState('');



    useEffect(() => {

        const token = localStorage.getItem('token');

        if (!token) {

            setError('Not logged in');

            return;

        }



        fetch('http://localhost:4000/api/auth/profile', {

            headers: {

                Authorization: `Bearer ${token}`,

            },

        })

            .then(res => res.json())

            .then(data => setProfile(data))

            .catch(() => setError('Failed to load profile'));

    }, []);



    if (error) return <p>{error}</p>;

    if (!profile) return <p>Loading...</p>;



    return (

        <div style={{ padding: '2rem' }}>

            <h2>User Profile</h2>

            <p>Email: {profile.email}</p>

        </div>

    );

}

.... this is profile.js code....@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700;800&display=swap');



body { margin: 0; font-family: 'Quicksand', sans-serif; background-color: #f8fafc; color: #1e293b; overflow-x: hidden; font-size: 1.1rem; }



/* Navbar */

.navbar { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 5%; background: white; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,0.03); }

.logo { font-size: 1.8rem; font-weight: 800; color: #0d9488; display: flex; align-items: center; gap: 8px; }

.nav-links { display: flex; gap: 40px; font-weight: 700; color: #64748b; cursor: pointer; font-size: 1.1rem; }

.auth-buttons { display: flex; gap: 15px; align-items: center; }

.signin-link { font-weight: 700; cursor: pointer; margin-right: 10px; font-size: 1.1rem; }



/* Buttons */

.btn-primary { background: linear-gradient(135deg, #14b8a6, #0d9488); color: white; border: none; padding: 14px 36px; border-radius: 50px; font-weight: 700; font-size: 1.1rem; cursor: pointer; box-shadow: 0 4px 14px rgba(13, 148, 136, 0.4); }

.btn-secondary { background: white; color: #334155; border: 1px solid #cbd5e1; padding: 14px 36px; border-radius: 50px; font-weight: 700; font-size: 1.1rem; cursor: pointer; }

.btn-white { background: white; color: #0d9488; border: none; padding: 16px 45px; border-radius: 50px; font-size: 1.2rem; font-weight: 800; margin-top: 2rem; cursor: pointer; }

.btn-user { background: #f1f5f9; padding: 8px 16px; border-radius: 50px; border: 1px solid #e2e8f0; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; color: #334155; }



/* Language Selector */

.btn-lang { display: flex; align-items: center; gap: 8px; background: white; border: 1px solid #cbd5e1; padding: 10px 18px; border-radius: 50px; cursor: pointer; font-weight: 700; font-size: 1rem; color: #334155; }

.lang-dropdown { position: absolute; top: 110%; right: 0; background: white; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); width: 140px; z-index: 500; }

.lang-option { padding: 12px 15px; cursor: pointer; font-weight: 600; font-size: 0.95rem; }

.lang-option:hover { background: #f1f5f9; color: #0d9488; }



/* Hero Section */

.hero-section { text-align: center; padding: 6rem 1rem 3rem; max-width: 1200px; margin: 0 auto; }

.hero-title { font-size: 5rem; line-height: 1.1; color: #0f172a; margin-bottom: 1rem; font-weight: 800; }

.hero-subtitle { font-size: 1.4rem; color: #64748b; margin-bottom: 3rem; }

.grade-badge { background: #ccfbf1; color: #0f766e; padding: 10px 24px; border-radius: 30px; font-weight: 700; font-size: 1rem; display: inline-block; margin-bottom: 1.5rem; }

.stats-row { display: flex; justify-content: center; gap: 2rem; margin-top: 5rem; }

.stat-card { background: white; padding: 2rem 3rem; border-radius: 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.02); border: 1px solid #f1f5f9; min-width: 200px; }

.stat-num { font-size: 2.5rem; font-weight: 800; color: #0d9488; display: block; margin-bottom: 5px; }



/* Sections */

.section-container { padding: 2rem 1rem; max-width: 1200px; margin: 0 auto; }

.section-header { text-align: center; font-size: 2.5rem; font-weight: 800; color: #0f172a; margin-bottom: 2rem; margin-top: 1rem; white-space: nowrap; }

@media (max-width: 768px) { .section-header { font-size: 2rem; white-space: normal; } }



/* Feature Grid */

.features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }

@media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }

@media (max-width: 600px) { .features-grid { grid-template-columns: 1fr; } }



/* Icon Boxes */

.icon-box { width: 60px; height: 60px; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 1.5rem; font-size: 1.2rem; }

.bg-teal { background-color: #0d9488 !important; }

.bg-orange { background-color: #f97316 !important; }

.bg-blue { background-color: #3b82f6 !important; }

.bg-pink { background-color: #d946ef !important; }



/* Feature Cards */

.feature-card { background: white; padding: 2.5rem; border-radius: 24px; border: 1px solid #f1f5f9; box-shadow: 0 4px 6px rgba(0,0,0,0.02); transition: transform 0.2s; }

.feature-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.08); }



/* Subject Cards */

.subjects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }

.subject-card { padding: 2rem; border-radius: 24px; color: white; height: 260px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 20px -5px rgba(0,0,0,0.1); position: relative; overflow: hidden; }

.grad-math { background: linear-gradient(135deg, #10b981, #0ea5e9); }

.grad-science { background: linear-gradient(135deg, #f97316, #ea580c); }

.grad-tech { background: linear-gradient(135deg, #3b82f6, #2563eb); }

.grad-social { background: linear-gradient(135deg, #10b981, #059669); }

.grad-english { background: linear-gradient(135deg, #ec4899, #db2777); }

.grad-hindi { background: linear-gradient(135deg, #f59e0b, #d97706); }

.grad-arts { background: linear-gradient(135deg, #a855f7, #7c3aed); }

.grad-pe { background: linear-gradient(135deg, #3b82f6, #06b6d4); }

.card-locked { background: white; border: 1px solid #e2e8f0; color: #64748b; }

.blur-layer { position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(135deg, #fce7f3, #fbcfe8); filter: blur(8px); opacity: 0.6; }

.lock-content { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 100%; font-weight: 700; font-size: 1.1rem; }

.sub-icon { background: rgba(255,255,255,0.25); padding: 10px; border-radius: 12px; }

.btn-continue { width: 100%; background: white; color: #333; border: none; padding: 12px; border-radius: 50px; font-weight: 700; cursor: pointer; font-size: 1rem; }



/* CTA & Footer */

.cta-section { background: linear-gradient(90deg, #10b981, #3b82f6); padding: 7rem 1rem; text-align: center; color: white; margin-top: 6rem; }

.cta-title { font-size: 3.5rem; font-weight: 800; margin: 1.5rem 0; }

.cta-badge { background: rgba(255,255,255,0.2); display: inline-block; padding: 8px 20px; border-radius: 20px; font-weight: 600; }



/* --- FOOTER (Exact Match to Reference) --- */

.footer-cta-bar { background-color: #22d3ee; padding: 1.5rem 0; display: flex; justify-content: center; alignItems: center; width: 100%; }

.btn-join-banner { background-color: white; color: #0f766e; font-weight: 800; font-size: 1.1rem; padding: 12px 32px; border-radius: 50px; border: none; cursor: pointer; display: flex; alignItems: center; gap: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s; }

.btn-join-banner:hover { transform: scale(1.05); }

.footer { background-color: #1e293b; color: #cbd5e1; padding: 4rem 5% 2rem; font-size: 0.95rem; }

.footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.2fr; gap: 2rem; max-width: 1200px; margin: 0 auto; padding-bottom: 3rem; border-bottom: 1px solid #334155; }

.footer h4 { color: white; font-size: 1.1rem; margin-bottom: 1.5rem; font-weight: 700; }

.footer ul { list-style: none; padding: 0; margin: 0; }

.footer li { margin-bottom: 1rem; cursor: pointer; transition: color 0.2s; display: flex; alignItems: center; gap: 10px; }

.footer li:hover { color: #22d3ee; }

.social-row { display: flex; gap: 12px; margin-top: 1.5rem; }

.social-btn { width: 40px; height: 40px; background-color: #334155; border-radius: 50%; display: flex; alignItems: center; justify-content: center; color: white; cursor: pointer; transition: background 0.2s; }

.social-btn:hover { background-color: #22d3ee; }

.copyright { text-align: center; margin-top: 2rem; font-size: 0.85rem; opacity: 0.6; }

@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr; text-align: center; } .social-row { justify-content: center; } .footer li { justify-content: center; } }



/* ================= AUTH PAGES ================= */

.auth-container { display: flex; height: 100vh; width: 100vw; overflow: hidden; }

.auth-left { width: 40%; padding: 4rem; color: white; display: flex; flex-direction: column; justify-content: center; position: relative; }

.orange-theme { background: #f97316; }

.auth-brand { font-size: 1.5rem; font-weight: 600; display: flex; align-items: center; gap: 10px; position: absolute; top: 40px; left: 40px; bottom: 40px;right: 40px; }

.auth-title { font-size: 3rem; line-height: 1.2; margin-bottom: 1rem; }

.auth-desc { font-size: 1.1rem; opacity: 0.9; margin-bottom: 3rem; max-width: 400px; }

.auth-feature-card { background: rgba(255,255,255,0.15); padding: 1.5rem; border-radius: 16px; margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem; backdrop-filter: blur(5px); }

.af-icon { background: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

.auth-right { width: 60%; background: white; display: flex; flex-direction: column; align-items: center; position: relative; height: 100vh; overflow-y: auto; padding-top: 2rem; padding-bottom: 2rem; }

.auth-form-box { width: 100%; max-width: 450px; margin-top: 60px; }

.auth-form-box h2 { font-size: 2rem; color: #0f172a; margin-bottom: 0.5rem; }

.form-sub { color: #64748b; margin-bottom: 2rem; }

.auth-form-box label { display: block; font-weight: 700; color: #334155; margin-bottom: 0.5rem; margin-top: 1.2rem; }

.input-field { width: 100%; padding: 14px; border-radius: 12px; border: 1px solid #e2e8f0; font-size: 1rem; background: #f8fafc; color: #333; outline: none; }

.input-field:focus { border-color: #0d9488; background: white; }

.btn-auth { width: 100%; padding: 16px; border-radius: 50px; border: none; font-size: 1.1rem; font-weight: 800; color: white; margin-top: 2rem; cursor: pointer; }

.orange-btn { background: #f97316; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4); }

.back-link { position: absolute; top: 20px; left: 30px; font-size: 0.95rem; color: #334155; cursor: pointer; display: flex; align-items: center; gap: 6px; }

/* ================= DASHBOARD (GREEN BANNER STYLE) ================= */

.dashboard-container { max-width: 1200px; margin: 2rem auto; padding: 0 1rem; }

.profile-banner-card { background: white; border-radius: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); overflow: hidden; margin-bottom: 2rem; border: 1px solid #f1f5f9; }

.banner-top { height: 150px; background: linear-gradient(90deg, #10b981, #3b82f6); }

.banner-content { padding: 0 3rem 2rem 3rem; display: flex; align-items: flex-end; margin-top: -60px; position: relative; }

.profile-avatar { width: 120px; height: 120px; background: white; border-radius: 24px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; color: #10b981; margin-right: 1.5rem; }