import React, { useState, useEffect, useRef } from 'react';
import CommandInput from './CommandInput';
import CommandOutput from './CommandOutput';
import ShortcutBar from './ShortcutBar';
import Typewriter from './Typewriter';
import { commands } from '../utils/commands.jsx';

const TerminalShell = () => {
    const [history, setHistory] = useState([]);
    const [commandHistory, setCommandHistory] = useState([]);
    const [theme, setTheme] = useState('dark');
    const bottomRef = useRef(null);

    useEffect(() => {
        document.documentElement.classList.toggle('light-theme', theme === 'light');
        document.body.classList.toggle('crt', theme === 'dark');
    }, [theme]);

    // Initial welcome message
    useEffect(() => {
        setHistory([
            {
                command: '',
                output: (
                    <div>
                        <p>
                            <Typewriter text="Welcome to Saifullah Anik's Portfolio v1.0.0" speed={20} />
                        </p>
                        <p>Type 'help' to see available commands.</p>
                        <br />
                    </div>
                )
            }
        ]);
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmdInput) => {
        const trimmedCmd = cmdInput.trim();
        if (!trimmedCmd) {
            setHistory(prev => [...prev, { command: '', output: null }]);
            return;
        }

        setCommandHistory(prev => [...prev, trimmedCmd]);

        const [rawCmd, ...args] = trimmedCmd.split(' ');
        const cmd = rawCmd.toLowerCase();

        // Handle special commands that modify shell state
        if (cmd === 'clear') {
            setHistory([]);
            return;
        }

        if (cmd === 'theme') {
            setTheme(prev => prev === 'dark' ? 'light' : 'dark');
            setHistory(prev => [...prev, { command: trimmedCmd, output: `Switched to ${theme === 'dark' ? 'light' : 'dark'} theme.` }]);
            return;
        }

        let output;
        if (commands[cmd]) {
            output = commands[cmd].action(args);
        } else {
            output = <span className="error-text">command not found: {cmd}</span>;
        }

        setHistory(prev => [
            ...prev,
            {
                command: trimmedCmd,
                output: output
            }
        ]);
    };

    const handleContainerClick = () => {
        // Focus the input when clicking anywhere in the terminal
        const input = document.querySelector('input');
        input?.focus();
    };

    return (
        <div
            id="main-terminal"
            className="terminal-shell"
            onClick={handleContainerClick}
            style={{
                padding: '2rem',
                maxWidth: '900px',
                margin: '0 auto',
                width: '100%',
                boxSizing: 'border-box',
                minHeight: '100vh'
            }}
        >
            <ShortcutBar onCommand={handleCommand} />
            {history.map((entry, index) => (
                <div key={index} className="history-entry">
                    {entry.command && (
                        <div className="command-line" style={{ marginBottom: '0.5rem' }}>
                            <span style={{ color: 'var(--prompt-color)', marginRight: '0.5rem' }}>visitor@portfolio:~$</span>
                            <span>{entry.command}</span>
                        </div>
                    )}
                    {entry.output && <CommandOutput content={entry.output} />}
                </div>
            ))}

            <CommandInput onCommand={handleCommand} history={commandHistory} />
            <div ref={bottomRef} />
        </div>
    );
};

export default TerminalShell;
