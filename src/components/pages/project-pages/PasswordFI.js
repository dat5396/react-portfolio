import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
import '../../Button.css';

function PasswordFI() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();
  const correctPassword = 'passion'; // Replace with your actual password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
    console.log('Correct password entered.');
      setAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  if (authenticated) {
    navigate('/facebook-instagram-integration');
  }

  return (
    <div className='form'>
      <h3>Password required to access this project</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button type="submit" className='btn btn--primary btn--medium'>
          Access
        </button>
      </form>
    </div>
  );
}

export default PasswordFI;
