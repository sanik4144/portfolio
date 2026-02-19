import React from 'react';
import userData from '../../data/userData.json';

const Projects = () => {
    return (
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '1rem' }}>
            {userData.projects.map(project => (
                <div key={project.id} style={{
                    border: '1px solid var(--prompt-color)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    transition: 'transform 0.2s ease'
                }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--command-color)', fontSize: '1.4rem' }}>{project.title}</h3>
                    <p style={{ margin: '0 0 1rem 0', color: 'var(--text-color)', opacity: 0.9 }}>{project.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        {project.techStack.map(tech => (
                            <span key={tech} style={{
                                fontSize: '0.7rem',
                                color: 'var(--bg-color)',
                                background: 'var(--dim-color)',
                                padding: '0.1rem 0.4rem',
                                borderRadius: '3px',
                                fontWeight: 'bold'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{
                            padding: '0.4rem 0.8rem',
                            border: '1px solid var(--command-color)',
                            borderRadius: '4px',
                            fontSize: '0.9rem'
                        }}>[Live Demo]</a>
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={{
                            padding: '0.4rem 0.8rem',
                            border: '1px solid var(--dim-color)',
                            color: 'var(--dim-color)',
                            borderRadius: '4px',
                            fontSize: '0.9rem'
                        }}>[Source Code]</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
