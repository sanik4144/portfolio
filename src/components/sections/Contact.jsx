import React from 'react';
import userData from '../../data/userData.json';

const Contact = () => {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText(userData.email);
        alert('Email copied to clipboard!');
    };

    return (
        <div>
            <p>Feel free to reach out:</p>
            <div style={{ margin: '1rem 0' }}>
                <p><strong>Email:</strong> <a href={`mailto:${userData.email}`}>{userData.email}</a></p>
                <button
                    onClick={handleCopyEmail}
                    style={{
                        background: 'var(--command-color)',
                        color: 'var(--bg-color)',
                        border: 'none',
                        padding: '0.3rem 0.6rem',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        fontSize: '0.8rem',
                        marginTop: '0.5rem',
                        borderRadius: '2px'
                    }}
                >
                    [Copy Email]
                </button>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
                <a href={userData.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>LinkedIn</a>
                <a href={userData.socials.facebook} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>Facebook</a>
                <a href={userData.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>

            <div style={{ marginTop: '2rem', borderTop: '1px dashed var(--dim-color)', paddingTop: '1rem' }}>
                <p>Alternatively, use this terminal-styled form:</p>
                <form name="contact" method="POST" data-netlify="true" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <span>name:</span>
                        <input type="text" name="name" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--dim-color)', color: 'var(--text-color)', outline: 'none', flex: 1 }} required />
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <span>email:</span>
                        <input type="email" name="email" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--dim-color)', color: 'var(--text-color)', outline: 'none', flex: 1 }} required />
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                        <span>message:</span>
                        <textarea name="message" rows="3" style={{ background: 'transparent', border: '1px solid var(--dim-color)', color: 'var(--text-color)', outline: 'none', padding: '0.5rem' }} required></textarea>
                    </div>
                    <button type="submit" style={{ alignSelf: 'flex-start', background: 'transparent', border: '1px solid var(--command-color)', color: 'var(--command-color)', padding: '0.3rem 1rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                        [Submit]
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
