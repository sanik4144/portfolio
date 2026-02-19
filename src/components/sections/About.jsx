import React from 'react';
import userData from '../../data/userData.json';

const About = () => {
    return (
        <div>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Role:</strong> {userData.role}</p>
            <br />
            <p>{userData.about.bio}</p>
            <p><strong>Location:</strong> {userData.about.location}</p>
        </div>
    );
};

export default About;
