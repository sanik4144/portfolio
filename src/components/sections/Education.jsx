import React from 'react';
import userData from '../../data/userData.json';

const Education = () => {
    return (
        <div>
            {userData.education.map((edu, index) => (
                <div key={index} style={{ marginBottom: '1rem' }}>
                    <h3 style={{ margin: 0 }}>{edu.degree}</h3>
                    <div style={{ color: 'var(--dim-color)' }}>
                        {edu.university}, {edu.year}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;
