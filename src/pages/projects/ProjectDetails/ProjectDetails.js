import React from 'react';
import PropTypes from 'prop-types';

import { withLanguage } from '../../../hocs/language';

import Slider from 'react-slick';
import TechnologyBadge from '../../../components/TechnologyBadge/TechnologyBadge';

import './ProjectDetails.scss';

const propTypes = {};

const texts = {
  codeLink: {
    ru: 'Исходный код',
    en: 'Source code',
  },
};

function getPathToScreenshot(project, name) {
  return `/images/projects/${project}/${name}`;
}

const ProjectDetails = ({
  name,
  link,
  title,
  description,
  technologies,
  screenshots,
  codeLink,
  lang,
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  function openImage(event) {
    window.open(event.target.src);
  }

  return (
    <div className="project-details">
      <h3>{title.ru}</h3>

      <Slider {...settings}>
        {screenshots.map(screenshot => {
          return (
            <img
              key={screenshot}
              src={getPathToScreenshot(name, screenshot)}
              alt=""
              onClick={openImage}
            />
          );
        })}
      </Slider>

      <p>{description.ru}</p>

      <div className="technologies">
        {technologies.map(technology => {
          return <TechnologyBadge key={technology} name={technology} />;
        })}
      </div>

      <a href={link}>{link}</a>

      {codeLink && (
        <div>
          <p>{texts.codeLink[lang]}</p>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            {codeLink}
          </a>
        </div>
      )}
    </div>
  );
};

ProjectDetails.propTypes = propTypes;

export default withLanguage(ProjectDetails);
