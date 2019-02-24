import React from 'react';
import PropTypes from 'prop-types';

import SocialLinks from './SocialLinks/SocialLinks';

import './Contact.scss';

const propTypes = {};

const Contact = () => {
  return (
    <div className="contacts" id="contacts">
      <h3>Контакты</h3>
      <SocialLinks />
    </div>
  );
};

Contact.propTypes = propTypes;

export default Contact;
