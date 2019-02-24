import React, { Component } from 'react';

import Header from './components/Header/Header';
import MainPage from './pages/Main/MainContainer';

import Modal from './components/Modal/Modal';
import FastModal from './components/FastModal/FastModal';

import { LanguageContext } from './context';

import './App.scss';

class App extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isModalOpen: true });
    }, 2500);
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    return (
      <div className="app">
        <LanguageContext.Provider value="en">
          <Header />

          <MainPage />

          {this.state.isModalOpen && (
            <Modal close={this.closeModal}>
              <FastModal close={this.closeModal} />
            </Modal>
          )}
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
