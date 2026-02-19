import React from 'react';
import userData from '../../data/userData.json';

const Projects = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
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
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        {project.techStack.map(tech => (
                            <span key={tech} style={{
                                fontSize: '0.7rem',
                                color: 'var(--link-color)',
                                // background: 'var(--dim-color)',
                                border: '1px solid var(--link-color)',
                                padding: '0.1rem 0.4rem',
                                borderRadius: '3px',
                                fontWeight: 'bold'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        {project.description.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{
                            padding: '0.4rem 0.8rem',
                            border: '1px solid var(--link-color)',
                            color: 'var(--link-color)',
                            borderRadius: '4px',
                            fontSize: '0.9rem',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease'
                        }} className="project-link">Live Demo</a>
                        <a
                            href={project.codeLink && project.codeLink !== '#' ? project.codeLink : undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '0.4rem 0.8rem',
                                border: '1px solid var(--dim-color)',
                                color: 'var(--link-color)',
                                borderRadius: '4px',
                                fontSize: '0.9rem',
                                textDecoration: 'none',
                                opacity: (!project.codeLink || project.codeLink === '#') ? 0.3 : 1,
                                cursor: (!project.codeLink || project.codeLink === '#') ? 'default' : 'pointer',
                                pointerEvents: (!project.codeLink || project.codeLink === '#') ? 'none' : 'auto'
                            }}
                        >
                            {(!project.codeLink || project.codeLink === '#') ? 'Source Code' : 'Source Code'}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
