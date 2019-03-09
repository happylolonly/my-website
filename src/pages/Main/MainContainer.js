import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Main from './Main';

// import './MainContainer.scss';

class MainContainer extends Component {
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

export default MainContainer;
