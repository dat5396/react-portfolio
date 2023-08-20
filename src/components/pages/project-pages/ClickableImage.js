import React from 'react';
import './IlluminComponentLibrary.css';

function ClickableImage({ imageSrc, targetId }) {
  const handleClick = () => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <img className='clickable__image' src={imageSrc} alt="Clickable Image" onClick={handleClick} />;
}

export default ClickableImage;
