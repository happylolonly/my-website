import React from 'react';
import PropTypes from 'prop-types';

import Contact from '../components/contact/Contact';

// import './ContactContainer.scss';

const propTypes = {};

const ContactContainer = () => {
  return (
    <div className="contact-page">
      <Contact />
    </div>
  );
};

ContactContainer.propTypes = propTypes;

export default ContactContainer;
