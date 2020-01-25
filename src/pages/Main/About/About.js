import React from 'react';
import PropTypes from 'prop-types';

import './About.scss';

const propTypes = {};

const About = () => {
  return (
    <div className="about" id="about">
      <h3>About</h3>
      <p>
        За 4+ года разработки, я успел поработать в различных компаниях: и в стартапах, где мы
        делали проекты с нуля, и в больших компаниях с высоконагруженными проектами. Так же у меня
        есть опыт фриланса и оперсорса. Видел разработку с разных сторон. За это время я не перестаю
        восхищаться современным вебом и теми возможностями которые он предоставляет.
      </p>
    </div>
  );
};

About.propTypes = propTypes;

export default About;
