import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const propTypes = {};

const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <a href="#hero">Главная</a>
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
        <li>
          <a href="#contact">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = propTypes;

export default Header;
