import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

import './Main.scss';

const propTypes = {};

const Main = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Skills />
      <Projects />

      <Link to="/contact">Contact me</Link>
    </div>
  );
};

Main.propTypes = propTypes;

export default Main;
