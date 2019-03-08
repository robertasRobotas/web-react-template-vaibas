import React, { Component } from 'react';
import styles from './About.module.css';
import IntroductionTitle from './Components/IntroductionTitle';
import IntroductionArticle from './Components/IntroductionArticle';


class About extends Component {
  render() {
    return (
      <div className={styles.SubPage}>
          <IntroductionTitle/>
          <IntroductionArticle/>
      </div>
    );
  }
}

export default About;
