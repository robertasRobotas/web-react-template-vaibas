import React, { Component } from 'react';
import mainStyles from '../Pages.module.css';
import Title from './Components/Title';
import VideoPlayer from './Components/VideoPlayer';
import Credits from './Components/Credits';

class Main extends Component {
  render() {
    return (
      <div className={mainStyles.Page}>
        <Title/>
        <VideoPlayer/>
        <Credits/>
      </div>
    );
  }
}

export default Main;
