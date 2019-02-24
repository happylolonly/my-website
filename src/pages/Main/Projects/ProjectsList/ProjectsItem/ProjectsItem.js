import React from 'react';
import PropTypes from 'prop-types';

import './ProjectsItem.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
};

function getPathToScreenshot(project, name) {
  return `/images/projects/${project}/${name}`;
}

const ProjectsItem = ({ name, screenshots, title, openProject }) => {
  function open() {
    openProject(name);
  }

  return (
    <div className="projects-item" onClick={open}>
      <div className="preview-wrapper">
        <img src={getPathToScreenshot(name, screenshots[0])} alt={`${title.ru} preview`} />
      </div>
      <h5>{title.ru}</h5>
    </div>
  );
};

ProjectsItem.propTypes = propTypes;

export default ProjectsItem;
