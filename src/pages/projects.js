import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProjectsList from '../components/projects/ProjectsList/ProjectsList';
import ProjectDetails from '../components/projects/ProjectDetails/ProjectDetails';
import Modal from '../components/Modal/Modal';

import projects from '../components/projects/projects.json';

import Layout from '../components/layout';

import SEO from '../components/seo';

import '../components/projects/Projects.scss';

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
      <Layout>
        <SEO />

        <div className="projects" id="projects">
          <h3>Projects</h3>
          <ProjectsList projects={projects} openProject={this.openProject} />

          {this.state.isModalOpen && (
            <Modal close={this.closeModal} className="project-details-modal">
              <ProjectDetails {...this.getProps(this.state.currentProject)} />
            </Modal>
          )}
        </div>
      </Layout>
    );
  }
}

export default Projects;
