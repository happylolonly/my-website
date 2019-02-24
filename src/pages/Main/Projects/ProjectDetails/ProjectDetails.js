import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import './ProjectDetails.scss';

const propTypes = {};

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
}) => {
  var settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };

  return (
    <div className="project-details">
      <h3>{title.ru}</h3>

      <Slider {...settings}>
        {screenshots.map(screenshot => {
          return (
            <div key={screenshot} className="tes">
              <h3>sjjdk</h3>
              <img src={getPathToScreenshot(name, screenshot)} alt="" />
            </div>
          );
        })}
      </Slider>

      <p>{description.ru}</p>

      <div>
        {technologies.map(technology => {
          return <div key={technology}>{technology}</div>;
        })}
      </div>

      <a href={link}>{link}</a>

      {codeLink && (
        <div>
          <p>COde</p>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            {codeLink}
          </a>
        </div>
      )}
    </div>
  );
};

ProjectDetails.propTypes = propTypes;

export default ProjectDetails;
