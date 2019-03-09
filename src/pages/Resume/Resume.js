import React from 'react';
import PropTypes from 'prop-types';

import './Resume.scss';

const propTypes = {};

const Resume = () => {
  return (
    <div className="resume">
      <h3>Resume</h3>

      <p>One day it will be good page with my resume...</p>
      <img
        src="https://image.freepik.com/vector-gratis/atardecer-paisaje-cartoon_1110-888.jpg"
        alt=""
        height="300"
      />

      <p>but for now check this links:</p>

      <ul>
        <li>
          <a
            href="https://jobs.tut.by/resume/baf76e09ff02d58f690039ed1f5944364d5349"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="https://www.upwork.com/fl/cheslavzhuravsky"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork
          </a>
        </li>
        <li>
          <a href="https://github.com/happylolonly" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};

Resume.propTypes = propTypes;

export default Resume;
