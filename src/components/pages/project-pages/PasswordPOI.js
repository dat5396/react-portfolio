import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
import '../../Button.css';

function PasswordPOI() {
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
    navigate('/geo-poi-targeting');
  }

  return (
    <div className='form'>
      <h3>This project is being updated.</h3>
      <h3> Please come back later.</h3>
      {/* <h3>It can be found in my resume.</h3>
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
      </form> */}
    </div>
  );
}

export default PasswordPOI;
