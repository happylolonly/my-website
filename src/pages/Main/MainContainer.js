import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Main from './Main';

// import './StateComponent.scss';

class StateComponent extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <div className="main-page">
        <Main />
      </div>
    );
  }
}

export default StateComponent;
