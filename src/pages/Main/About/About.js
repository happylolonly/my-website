import React from 'react';
import PropTypes from 'prop-types';

import './About.scss';

const propTypes = {};

const About = () => {
  return (
    <div className="about" id="about">
      <h3>About</h3>
      <p>
        За 4+ года опыта разработки, я успел поработать в различных компаниях И в стартапах где мы
        делали проекты с нуля, и в больших компаниях с высоконагруженными проектами Так же есть опыт
        фриланса, оперсорса. За это это время я не перестаю восхищаться современным вебом и тем как
        он позволяет быстро приносить пользу бизнесу
      </p>
    </div>
  );
};

About.propTypes = propTypes;

export default About;
