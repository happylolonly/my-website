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

        <ul>
          <li>
            <h3>Современная веб разработка</h3>
            <div>
              <p>
                Мои основные навыки это современная веб разработка с использованием (сейчас) таких
                технологий как React, Node.js, PWA. Ну и конечно это все строится на хорошем
                понимании HTML, CSS, JavaScript.
              </p>
            </div>
          </li>
          <li>
            <h3>Скорость разработки</h3>
            <div>
              <p>
                Кроме технической части, я знаю как быстро меняется все в нашем мире, поэтому считаю
                что разработка должна быть максимально быстрой,{' '}
              </p>
            </div>
          </li>
          <li>
            <h3>Понимание бизнеса</h3>
            <div>
              <p>Кроме того стараюсь Понимание бизнеса (зачем делать то что никому не нужно)</p>
            </div>
          </li>
        </ul>

        {this.state.isShowAllSkills && <AllSkills />}
        <button onClick={this.handleButtonClick}>See all skills</button>
      </div>
    );
  }
}

Skills.propTypes = propTypes;

export default Skills;
