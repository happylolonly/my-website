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
        <h1>Hi, my name is Cheslav</h1>
        <h2>I'am fullstack developer</h2>
        <h3>
          {/* And my bestside is максимально быстро делать так чтобы код начал приносить пользу */}И
          и я не перестаю восхищаться современным вебом, и теми возможностями которые он
          предоставляет.
        </h3>
      </div>
    </div>
  );
};

Hero.propTypes = propTypes;

export default Hero;
