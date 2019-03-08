import React, { Component } from 'react';
import styles from '../Portfolio.module.css';

class PortfolioTitle extends Component {
  render() {
    return (
      <div>
          <div className={styles.PortfolioTitleWrapper}>
              <div className={styles.PortfolioTitle}>
                  PORTFOLIO
              </div>
          </div>
      </div>
    );
  }
}

export default PortfolioTitle;
