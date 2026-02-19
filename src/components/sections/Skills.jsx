import React from 'react';
import userData from '../../data/userData.json';

const Skills = () => {
    return (
        <div>
            {Object.entries(userData.skills).map(([category, items]) => (
                <div key={category} style={{ marginBottom: '0.5rem' }}>
                    <strong style={{ textTransform: 'capitalize', color: 'var(--prompt-color)' }}>{category}:</strong> {items.join(', ')}
                </div>
            ))}
        </div>
    );
};

export default Skills;
