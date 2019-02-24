import React from 'react';
import PropTypes from 'prop-types';

import ProjectsItem from './ProjectsItem/ProjectsItem';

import './ProjectsList.scss';

const propTypes = {
  projects: PropTypes.array.isRequired,
  openProject: PropTypes.func.isRequired,
};

const ProjectsList = ({ projects, openProject }) => {
  return (
    <div className="projects-list">
      {projects.map(project => {
        const { name, title, link, screenshots } = project;
        return (
          <ProjectsItem
            key={name}
            name={name}
            title={title}
            link={link}
            screenshots={screenshots}
            openProject={openProject}
          />
        );
      })}
    </div>
  );
};

ProjectsList.propTypes = propTypes;

export default ProjectsList;
