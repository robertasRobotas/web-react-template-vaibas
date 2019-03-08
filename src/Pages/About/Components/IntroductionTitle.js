import React, { Component } from 'react';
import styles from '../About.module.css';


class IntroductionTitle extends Component {
  render() {
    return (
      <div>
          <div className={styles.IntroductionTitleWrapper}>
                <div className={styles.IntroductionTitle}>
                    ABOUT US
                </div>
          </div>
      </div>
    );
  }
}

export default IntroductionTitle;
