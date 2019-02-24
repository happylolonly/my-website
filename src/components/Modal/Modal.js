import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

import './Modal.scss';

const propTypes = {
  // close
  // children
};

class Modal extends Component {
  componentWillMount() {
    this.element = document.createElement('div');
    document.body.appendChild(this.element);
  }

  componentWillUnmount() {
    document.body.removeChild(this.element);
  }

  render() {
    return ReactDom.createPortal(
      <div className="modal">
        <div className="inner">
          <span className="close" onClick={this.props.close}>
            x
          </span>
          {this.props.children}
        </div>
      </div>,
      this.element
    );
  }
}

Modal.propTypes = propTypes;

export default Modal;
