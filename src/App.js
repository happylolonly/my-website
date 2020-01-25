import React, { Component } from 'react';

import Header from './components/Header/Header';
import MainPage from './pages/Main/MainContainer';
import ResumePage from './pages/development/index';
import ContactPage from './pages/Contact/ContactContainer';

import Modal from './components/Modal/Modal';

import { LanguageContext, defaultLanguage } from './context';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

class App extends Component {
  state = {
    language: defaultLanguage,
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <LanguageContext.Provider value={this.state.language}>
            <Header changeLanguage={this.changeLanguage} />

            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/development" component={ResumePage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </LanguageContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
