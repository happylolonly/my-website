import React from 'react';
import PropTypes from 'prop-types';

import './Hero.scss';

const propTypes = {};

// const text = {
//   'ru':
// }

const Hero = () => {
  return (
    <div className="hero" id="top">
      <div className="photo-wrapper">
        <img src="/images/me.jpg" alt="" />
      </div>

      <div className="hero-text">
        <h1>Привет, меня зовут Чес Журавский</h1>
        <h2>я fullstack разработчик</h2>
        <h3>
          И лучшее что я умею - это максимально быстро делать так чтобы код начал приносить пользу
        </h3>
      </div>
    </div>
  );
};

Hero.propTypes = propTypes;

export default Hero;
