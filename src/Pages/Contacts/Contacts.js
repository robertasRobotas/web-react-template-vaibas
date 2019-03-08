import React, { Component } from 'react';
import mainStyles from '../Pages.module.css';
import ContectText from './Components/ContactText';
import ContectTitle from './Components/ContactTitle';

class Contacts extends Component {
  render() {
    return (
      <div className={mainStyles.SubPage}>
        <ContectTitle/>
        <ContectText/>
      </div>
    );
  }
}

export default Contacts;
