import React, { useState, useEffect, useRef } from 'react';
import { commands } from '../utils/commands.jsx';

const CommandInput = ({ onCommand, history = [] }) => {
    const [input, setInput] = useState('');
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onCommand(input);
            setInput('');
            setHistoryIndex(-1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (history.length > 0) {
                const newIndex = historyIndex + 1;
                if (newIndex < history.length) {
                    setHistoryIndex(newIndex);
                    setInput(history[history.length - 1 - newIndex]);
                }
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(history[history.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput('');
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const availableCommands = Object.keys(commands);
            const match = availableCommands.find(cmd => cmd.startsWith(input));
            if (match) {
                setInput(match);
            }
        }
    };

    return (
        <div className="command-input-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'var(--prompt-color)', marginRight: '0.5rem' }}>visitor@portfolio:~$</span>
            <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-color)',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    flex: 1,
                    outline: 'none',
                    caretColor: 'var(--cursor-color)'
                }}
                autoFocus
                spellCheck="false"
                autoComplete="off"
            />
        </div>
    );
};

export default CommandInput;
