import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Main from '../components/Main/Main';

// import './MainContainer.scss';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

class MainContainer extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <Layout>
        <SEO />
        <div className="main-page">
          <Main />
        </div>
      </Layout>
    );
  }
}

export default MainContainer;
