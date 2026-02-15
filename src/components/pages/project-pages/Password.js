import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
import '../../Button.css';

function Password() {
  const [password, setPassword] = useState('');
  // const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();
  const correctPassword = '1368'; // Replace with your actual password

  const handleSubmit = (e) => {
  e.preventDefault();

  if (password === '1368') {
    sessionStorage.setItem('auth', 'true');
    navigate('/1368');
  } else {
    alert('Incorrect password.');
  }
};



  return (
    <div className='form'>
      <h3>Please enter password to access this page.</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button type="submit" className='btn btn--primary btn--medium'>
          Access
        </button>
      </form>
    </div>
  );
}

export default Password;
