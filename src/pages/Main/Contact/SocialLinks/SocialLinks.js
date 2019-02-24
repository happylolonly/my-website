import React from 'react';
import PropTypes from 'prop-types';

import links from './links';

import './SocialLinks.scss';

const propTypes = {};

const SocialLinks = () => {
  return (
    <div className="social-links">
      Social links
      <ul>
        {links.map(({ name, link }) => {
          return (
            <li key={name}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

SocialLinks.propTypes = propTypes;

export default SocialLinks;
