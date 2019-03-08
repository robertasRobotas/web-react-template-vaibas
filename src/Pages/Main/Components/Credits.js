import React, { Component } from 'react';
import styles from '../Main.module.css';


class Credits extends Component {
  render() {
    return (
      <div>
        <div className={styles.CreditsWrapper}>
        <div className={styles.Credits}>by Robertas Ankudovicius</div>
        </div>
      </div>
    );
  }
}

export default Credits;
