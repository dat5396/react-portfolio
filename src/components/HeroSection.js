import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/hero.mp4" autoPlay loop muted />
      <h1>Hi, I am Dat Tran</h1>
      <p>Welcome to my portfolio</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          EXPLORE MY PROJECTS
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;