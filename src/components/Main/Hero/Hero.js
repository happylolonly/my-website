import React from 'react';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero" id="top">
      <div className="photo-wrapper">
        <img src={require('./images/me 2.jpg')} alt="Cheslav Zhuravsky" />
      </div>

      <div className="hero-text">
        <h1>Hi 👋, my name is Cheslav</h1>
        <h2>and this is website about me</h2>
        <p>(but I am very lazy 🐢 to finish it)</p>
      </div>
    </div>
  );
};

export default Hero;
