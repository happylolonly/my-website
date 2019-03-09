import React, { Component } from 'react';

import Header from './components/Header/Header';
import MainPage from './pages/Main/MainContainer';
import ResumePage from './pages/Resume/ResumeContainer';
import ContactPage from './pages/Contact/ContactContainer';

import Modal from './components/Modal/Modal';
import FastModal from './components/FastModal/FastModal';

import { LanguageContext } from './context';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

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
        <BrowserRouter>
          <LanguageContext.Provider value="en">
            <Header />

            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/resume" component={ResumePage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>

            {this.state.isModalOpen && (
              <Modal close={this.closeModal}>
                <FastModal close={this.closeModal} />
              </Modal>
            )}
          </LanguageContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
