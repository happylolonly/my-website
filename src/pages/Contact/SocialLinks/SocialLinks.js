import React from 'react';
import PropTypes from 'prop-types';

import { withLanguage } from '../../../hocs/language';

import links from './links';

import './SocialLinks.scss';

const texts = {
  social: {
    en: 'Find me somewhere in the Internet',
  },
};

const propTypes = {};

const SocialLinks = ({ lang }) => {
  return (
    <div className="social-links">
      {texts.social[lang]}
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

export default withLanguage(SocialLinks);
