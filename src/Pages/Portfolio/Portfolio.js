import React, { Component } from 'react';
import styles from './Portfolio.module.css';
import VideoPlayer from "./Components/VideoPlayer";
import PortfolioTitle from "./Components/PortfolioTitle";


class Portfolio extends Component {
  render() {
    return (
      <div className={styles.Page}>
          <PortfolioTitle/>
          <VideoPlayer link={"https://player.vimeo.com/video/284702014"}/>
          <VideoPlayer link={"https://player.vimeo.com/video/284702014"}/>
          <VideoPlayer link={"https://player.vimeo.com/video/284702014"}/>
      </div>
    );
  }
}

export default Portfolio;
