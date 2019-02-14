import React from 'react';
import PropTypes from 'prop-types';

import './Projects.scss';

const propTypes = {};

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h3>Проекты</h3>
      <a href="https://github.com/happylolonly">https://github.com/happylolonly</a>
    </div>
  );
};

Projects.propTypes = propTypes;

export default Projects;
