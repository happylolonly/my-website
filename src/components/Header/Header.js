import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './Header.scss';

const propTypes = {};

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
        {/* {window.location.pathname === '/' && (
          <ul>
            <li>
              <a href="#top">Наверх</a>
            </li>
            <li>
              <a href="#about">Обо мне</a>
            </li>
            <li>
              <a href="#skills">Навыки</a>
            </li>
            <li>
              <a href="#projects">Проекты</a>
            </li>
          </ul>
        )} */}
      </nav>
    </header>
  );
};

Header.propTypes = propTypes;

export default Header;
