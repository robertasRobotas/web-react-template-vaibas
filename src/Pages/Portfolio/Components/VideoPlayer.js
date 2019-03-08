import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import styles from '../Portfolio.module.css';

class VideoPlayer extends Component {
  render() {
    return (
      <div>
          <div className={styles.PlayerWrapper}>
              <div className={styles.Player}>
                  <iframe src={this.props.link} width="100%" height="330" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
          </div>
      </div>
    );
  }
}

export default VideoPlayer;
