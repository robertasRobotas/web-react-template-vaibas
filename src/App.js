import React, { Component } from 'react';
import styles from './App.module.css';

import Main from './Pages/Main/Main';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contacts from './Pages/Contacts/Contacts';

class App extends Component {
  render() {
    return (
      <div className={styles}>
      <Main/>
      <About/>
      <Portfolio/>
      <Contacts/>
      </div>
    );
  }
}

export default App;
