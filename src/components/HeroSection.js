/* eslint-disable react/no-unknown-property */

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Fade } from "react-awesome-reveal";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video playsInline webkit-playsinline autoPlay loop muted src="/videos/home-edited_1.mp4"/>
      <Fade >
        <h1>{`Hi, I'm Dat Tran`}</h1>
        <p>Welcome to my portfolio</p>
        <div className="hero-btns">
          <Button to='/projects' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            Explore my projects
          </Button>
        </div>
      </Fade>
    </div>
  )
}

export default HeroSection;