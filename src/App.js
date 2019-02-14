import React, { Component } from 'react';

import Header from './components/Header/Header';
import MainPage from './pages/Main/MainContainer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
