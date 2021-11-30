import React from 'react';
import '../../App.css';
import { Button } from '../Buttons/Button';
import './HeroSection.css';

function HeroSection() {
  return ( 
    <div className='hero-container'>
      <video src='./media/videos/video-1.mp4' autoPlay loop muted />
      <h1>BlackStar</h1>
      <p>Real life stories from people around the world</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SHARE YOUR STORY
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ABOUT US 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;