import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Buttontwo } from './Buttontwo';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/IntroSCP.mp4' autoPlay loop muted />
      <h1>SCP Foundation</h1>
      <p>SCP documents archive</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          The SCP Files
        </Button>
        <Buttontwo
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SCP Recordings <i className='far fa-play-circle' />
        </Buttontwo>
      </div>
    </div>
  );
}

export default HeroSection;
