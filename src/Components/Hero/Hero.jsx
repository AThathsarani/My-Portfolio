import React from 'react';
import './Hero.css';
import image12 from '../../assets/image12.jpeg';
import resume from '../../assets/Ayodya Resume.pdf';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={image12} alt="Ayodya Thathsarani" />
      <h1><span>I'm Ayodya Thathsarani,</span> Software Engineering Student.</h1>
      <p>Passionate Software Engineering student dedicated to innovative solutions and impactful technology.</p>
      <div className="hero-action">
        <div className="hero-connect"><a className='git-link' href="https://github.com/AThathsarani">GitHub</a></div>
        <p></p>
        <a href={resume} download className="hero-resume">My Resume</a>
      </div>
    </div>
  );
}

export default Hero;