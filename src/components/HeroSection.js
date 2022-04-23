import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video playsinline autoPlay loop muted >
        <source type='video/mp4' src="/videos/hero.mp4"></source>
      </video> 
      <h1>Hi, I'm Dat Tran</h1>
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