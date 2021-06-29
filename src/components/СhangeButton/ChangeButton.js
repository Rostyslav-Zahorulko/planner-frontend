import React from 'react';
import styles from './ChangeButton.module.css';

const ChangeButton = ({ children }) => (
  <div className={styles.chenge_button}>
    <button type="button" className={styles.chenge_pencil}>
      {children}
    </button>
  </div>
);

export default ChangeButton;
