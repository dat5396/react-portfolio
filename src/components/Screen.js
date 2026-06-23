import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import Button from './Button';
import '.././AppStyle.css';
import './Screen.css';

function Screen() {
    const [key, setKey] = useState('');
    const inputRef = useRef(null);
    const { authenticate } = useAuth();

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e?.preventDefault();
        if (key === '1368') {
            authenticate();
        } else {
            alert('Incorrect password.');
        }
    };

    return (
        <div className="screen">
            <video playsInline autoPlay loop muted src="/images/home images/lock.webm" />
            <p>Please enter the password to access this page.</p>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="password"
                    className="input"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter password"
                />
            </form>
            <div className="modal-footer">
                <Button variant="primary" onClick={handleSubmit} size="lg">
                    Access
                </Button>
            </div>
        </div>
    );
}

export default Screen;