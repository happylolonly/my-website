import React from 'react';
import PropTypes from 'prop-types';

import './Resume.scss';
import { Link } from 'gatsby';

const propTypes = {};

const Resume = () => {
  return (
    <div className="resume-page">
      <h3>Development</h3>

      <p>I am a JavaScript developer</p>

      <p>One day I will update this page...</p>

      <img
        src="https://image.freepik.com/vector-gratis/atardecer-paisaje-cartoon_1110-888.jpg"
        alt=""
        height="300"
      />

      <p>but for now you can check this links:</p>

      <Link to="/projects">Projects</Link>

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
      </ul>

      <h5>Github</h5>

      <ul>
        <li>
          <a href="https://github.com/happylolonly" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://coderstats.net/github/#HappyLoLonly"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coderstats
          </a>
        </li>
        <li>
          <a
            href="http://git-awards.com/users/search?login=happylolonly"
            target="_blank"
            rel="noopener noreferrer"
          >
            git-awards
          </a>
        </li>
      </ul>
    </div>
  );
};

Resume.propTypes = propTypes;

export default Resume;
