import React, { Component } from 'react';
import styles from '../Contacts.module.css';

class ContactsText extends Component {
  render() {
    return (
      <div className={styles.ContactTextWrapper}>
        <div className={styles.leftTable}>
        <div className={styles.leftTableText}>email :</div>
        <div className={styles.leftTableText}>instagram :</div>
        <div className={styles.leftTableText}>facebook :</div>
        <div className={styles.leftTableText}>tel. nr. :</div>
        </div>
        <div className={styles.rightTable}>
        <div className={styles.rightTableText}>r.ankudovicius@gmail.com</div>
        <div className={styles.rightTableText}>@VaibasImage</div>
        <div className={styles.rightTableText}>Vaibas Image</div>
        <div className={styles.rightTableText}>+37060987494</div>
        </div>
      </div>
    );
  }
}

export default ContactsText;
