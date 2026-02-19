import React from 'react';

const ShortcutBar = ({ onCommand }) => {
    const shortcuts = ['about', 'skills', 'projects', 'experience', 'education', 'theme'];

    return (
        <div className="shortcut-bar" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--dim-color)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--bg-color)',
            zIndex: 10,
            opacity: 0.9
        }}>
            <span style={{ color: 'var(--dim-color)', fontSize: '0.8rem', width: '100%', marginBottom: '0.2rem' }}>Quick Access:</span>
            {shortcuts.map(cmd => (
                <button
                    key={cmd}
                    onClick={() => onCommand(cmd)}
                    style={{
                        background: 'transparent',
                        border: '1px solid var(--prompt-color)',
                        color: 'var(--prompt-color)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        fontSize: '0.8rem',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        boxShadow: '0 0 5px rgba(0, 212, 255, 0.2)'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.background = 'var(--prompt-color)';
                        e.target.style.color = 'var(--bg-color)';
                        e.target.style.boxShadow = '0 0 15px var(--prompt-color)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'var(--prompt-color)';
                        e.target.style.boxShadow = '0 0 5px rgba(0, 212, 255, 0.2)';
                    }}
                >
                    {cmd}
                </button>
            ))}
        </div>
    );
};

export default ShortcutBar;
