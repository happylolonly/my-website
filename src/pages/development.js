import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Resume from '../components/development/Resume';

import Layout from '../components/layout';

import SEO from '../components/seo';

// import './ResumeContainer.scss';

class ResumeContainer extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <Layout>
        <SEO />

        <div className="resume-page">
          <Resume />
        </div>
      </Layout>
    );
  }
}

export default ResumeContainer;
