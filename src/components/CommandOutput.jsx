import React from 'react';

const CommandOutput = ({ content }) => {
    return (
        <div className="command-output" style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            {content}
        </div>
    );
};

export default CommandOutput;
