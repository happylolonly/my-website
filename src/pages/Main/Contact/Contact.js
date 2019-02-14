import React from 'react';
import PropTypes from 'prop-types';

import './Contact.scss';

const propTypes = {};

const Contact = () => {
  return (
    <div className="contacts" id="contacts">
      <h3>Контакты</h3>
      <a href="https://www.facebook.com/happylolonly">https://www.facebook.com/happylolonly</a>
    </div>
  );
};

Contact.propTypes = propTypes;

export default Contact;
