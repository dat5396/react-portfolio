import React, { useState } from 'react';
import './ScrollToTopButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className={`scroll-to-top-button ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
}

export default ScrollToTopButton;
