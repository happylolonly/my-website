import React from 'react';
import PropTypes from 'prop-types';

import './TechnologyBadge.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const TechnologyBadge = ({ name }) => {
  return <div className="technology-badge">{name}</div>;
};

TechnologyBadge.propTypes = propTypes;

export default TechnologyBadge;
