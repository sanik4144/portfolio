import React, { useState } from 'react';
import { Mail, Linkedin, Facebook, Github, Copy, Check } from 'lucide-react';
import userData from '../../data/userData.json';

const About = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(userData.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="about-section">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Role:</strong> {userData.role}</p>
            <br />
            <p>{userData.about.bio}</p>
            <p><strong>Location:</strong> {userData.about.location}</p>

            <div className="contact-info" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={18} style={{ color: 'var(--prompt-color)' }} />
                <span><strong>Email:</strong> <a href={`mailto:${userData.email}`}>{userData.email}</a></span>
                <button
                    onClick={handleCopyEmail}
                    className="copy-button"
                    title="Copy Email"
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: copied ? 'var(--text-color)' : 'var(--dim-color)',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease'
                    }}
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
                {copied && <span style={{ fontSize: '0.7rem', color: 'var(--text-color)', marginLeft: '0.5rem' }}>Copied!</span>}
            </div>

            <div className="social-icons" style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem' }}>
                <a href={userData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                    <Linkedin size={24} />
                </a>
                <a href={userData.socials.facebook} target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
                    <Facebook size={24} />
                </a>
                <a href={userData.socials.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                    <Github size={24} />
                </a>
            </div>
        </div>
    );
};

export default About;
