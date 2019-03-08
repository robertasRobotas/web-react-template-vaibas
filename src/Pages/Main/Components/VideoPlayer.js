import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import styles from '../Main.module.css';

class VideoPlayer extends Component {
  render() {
    return (
      <div>
          <div className={styles.PlayerWrapper}>
              <div className={styles.Player}>
                  <iframe src="https://player.vimeo.com/video/284702014" width="100%" height="330" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
          </div>
      </div>
    );
  }
}

export default VideoPlayer;
