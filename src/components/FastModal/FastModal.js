import React from 'react';
import PropTypes from 'prop-types';

import { LanguageContext } from '../../context';

import './FastModal.scss';

const text = {
  ru: {
    main:
      "Website in development now. Prefer show anything, than nothing. Main information and logic are working. Don't have time for styles now. Update them later =)",
    button: "I'am understand 😌",
  },
  en: {
    main:
      "Website in development now. Prefer show anything, than nothing. Main information and logic are working. Don't have time for styles now. Update them later =)",
    button: "I'am understand 😌",
  },
};

const propTypes = {
  close: PropTypes.func.isRequired,
};

const FastModal = ({ close }) => {
  return (
    <LanguageContext.Consumer>
      {value => {
        const { main, button } = text[value];
        return (
          <div className="fast-modal">
            <p>{main}</p>
            <button onClick={close}>{button}</button>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
};

FastModal.propTypes = propTypes;
FastModal.contextType = LanguageContext;

export default FastModal;
