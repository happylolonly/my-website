import React from 'react';
import PropTypes from 'prop-types';

import { languages } from '../../../context';

import './LanguageSwitcher.scss';

const propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};

const LanguageSwitcher = ({ changeLanguage }) => {
  return (
    <div className="language-switcher">
      {languages.map(language => {
        return (
          <span className="language-item" key={language} onClick={() => changeLanguage(language)}>
            {language}
          </span>
        );
      })}
    </div>
  );
};

LanguageSwitcher.propTypes = propTypes;

export default LanguageSwitcher;
