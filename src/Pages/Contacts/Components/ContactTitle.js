import React, { Component } from 'react';
import styles from '../Contacts.module.css';


class ContactTitle extends Component {
  render() {
    return (
      <div>
          <div className={styles.ContactTitleWrapper}>
                <div className={styles.ContactTitle}>
                    Contacts
                </div>
          </div>
      </div>
    );
  }
}

export default ContactTitle;
