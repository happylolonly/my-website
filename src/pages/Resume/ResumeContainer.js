import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Resume from './Resume';

// import './ResumeContainer.scss';

class ResumeContainer extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <div className="resume-page">
        <Resume />
      </div>
    );
  }
}

export default ResumeContainer;
