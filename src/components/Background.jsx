import React from 'react';

const Background = () => {
    return (
        <div className="live-background">
            <div className="grid-container">
                <div className="grid"></div>
            </div>
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle"></div>
                ))}
            </div>
            <div className="vignette"></div>
        </div>
    );
};

export default Background;
