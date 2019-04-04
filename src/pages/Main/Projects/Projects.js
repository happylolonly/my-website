import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProjectsList from './ProjectsList/ProjectsList';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import Modal from '../../../components/Modal/Modal';

import projects from './projects.json';

import './Projects.scss';

class Projects extends Component {
  static propTypes = {};

  state = {
    isModalOpen: false,
    currentProject: null,
  };

  openProject = name => {
    const project = projects.find(project => project.name === name);

    this.setState({
      isModalOpen: true,
      currentProject: project,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      currentProject: null,
    });
  };

  getProps(project) {
    const { name, link, title, description, technologies, screenshots, codeLink } = project;

    return {
      name,
      link,
      title,
      description,
      technologies,
      screenshots,
      codeLink,
    };
  }

  render() {
    return (
      <div className="projects" id="projects">
        <h3>Projects</h3>
        <ProjectsList projects={projects} openProject={this.openProject} />

        {this.state.isModalOpen && (
          <Modal close={this.closeModal} className="project-details-modal">
            <ProjectDetails {...this.getProps(this.state.currentProject)} />
          </Modal>
        )}
      </div>
    );
  }
}

export default Projects;
