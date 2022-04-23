import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video playsInline webkit-playsinline autoPlay loop muted poster="/images/hero-poster.png" src="/videos/hero.mp4"/>
      <h1>Hi, I'm Dat Tran</h1>
      <p>Welcome to my portfolio</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          Explore My Projects
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;