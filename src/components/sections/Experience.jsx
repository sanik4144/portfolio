import React from 'react';
import userData from '../../data/userData.json';

const Experience = () => {
    return (
        <div>
            {userData.experience.map((exp, index) => (
                <div key={index} style={{ marginBottom: '1rem' }}>
                    <h3 style={{ margin: 0, color: 'var(--prompt-color)' }}>{exp.company}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--dim-color)' }}>
                        <span>{exp.role}</span>
                        <span>{exp.duration}</span>
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        {exp.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Experience;
