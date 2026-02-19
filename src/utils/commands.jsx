import React from 'react';
import userData from '../data/userData.json';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';

export const commands = {
  help: {
    description: 'List all available commands',
    action: () => {
      return (
        <div>
          <p>Available commands:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {Object.keys(commands).map(cmd => (
              <li key={cmd}>
                <span style={{ color: 'var(--command-color)', fontWeight: 'bold', minWidth: '100px', display: 'inline-block' }}>{cmd}</span>
                <span style={{ marginLeft: '1rem', color: 'var(--dim-color)' }}>- {commands[cmd].description}</span>
              </li>
            ))}
          </ul>
          <p>Tip: Use TAB for autocomplete. Use Up/Down arrows for history.</p>
        </div>
      );
    }
  },
  about: {
    description: 'Display information about me',
    action: () => <About />
  },
  skills: {
    description: 'List technical skills',
    action: () => <Skills />
  },
  projects: {
    description: 'View my projects. Usage: projects [--open <id>]',
    action: (args = []) => {
      if (args[0] === '--open' && args[1]) {
        const index = parseInt(args[1]) - 1;
        const project = userData.projects[index];
        if (project && project.liveLink !== '#') {
          window.open(project.liveLink, '_blank');
          return `Opening ${project.title}...`;
        }
        return `Project not found or link not available for index: ${args[1]}`;
      }
      return <Projects />;
    }
  },
  experience: {
    description: 'See my work history',
    action: () => <Experience />
  },
  education: {
    description: 'Show educational background',
    action: () => <Education />
  },
  contact: {
    description: 'Get contact info',
    action: () => <Contact />
  },
  social: {
    description: 'List social media profiles',
    action: () => (
      <div>
        <p><a href={userData.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn: {userData.socials.linkedin}</a></p>
        <p><a href={userData.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook: {userData.socials.facebook}</a></p>
        <p><a href={userData.socials.github} target="_blank" rel="noopener noreferrer">GitHub: {userData.socials.github}</a></p>
      </div>
    )
  },
  clear: {
    description: 'Clear the terminal output',
    action: () => null
  },
  theme: {
    description: 'Toggle light/dark theme',
    action: () => 'Theme toggled!'
  },
  resume: {
    description: 'Download my resume',
    action: () => {
      window.open('/resume.pdf', '_blank');
      return 'Downloading resume... (placeholder)';
    }
  }
};
