import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AllSkills from './AllSkills/AllSkills';

import './Skills.scss';

const propTypes = {};

class Skills extends Component {
  state = {
    isShowAllSkills: false,
  };

  handleButtonClick = () => {
    this.setState({ isShowAllSkills: !this.state.isShowAllSkills });
  };
  render() {
    return (
      <div className="skills" id="skills">
        <h3>Skills</h3>

        {this.state.isShowAllSkills && <AllSkills />}
        <button onClick={this.handleButtonClick}>See all skills</button>
      </div>
    );
  }
}

Skills.propTypes = propTypes;

export default Skills;
