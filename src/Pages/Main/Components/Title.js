import React, { Component } from 'react';
import styles from '../Main.module.css';


class Title extends Component {
  render() {
    return (
      <div>
        <div className={styles.TitleWrapper}>
        <div className={styles.Title}>VAIBAS IMAGE</div>
        </div>
      </div>
    );
  }
}

export default Title;
