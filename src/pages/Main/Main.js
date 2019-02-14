import React from 'react';
import PropTypes from 'prop-types';

import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

import './Main.scss';

const propTypes = {};

const Main = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

Main.propTypes = propTypes;

export default Main;
