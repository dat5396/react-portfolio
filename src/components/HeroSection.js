import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Fade from 'react-reveal/Fade';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video playsInline webkit-playsinline autoPlay loop muted src="/videos/hero-copy.mp4"/>
      <Fade bottom>
        <h1>Hi, I'm Dat Tran</h1>
        <p>Welcome to my portfolio</p>
        <div className="hero-btns">
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            Explore My Projects
          </Button>
        </div>
      </Fade>
      {/* <div className='copyright'>
        <p>Developed by Dat Tran. All Rights Reserved</p>
      </div>   */}
    </div>
  )
}

export default HeroSection;