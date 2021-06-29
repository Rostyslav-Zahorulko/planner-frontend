import React from 'react';
import styles from './AddIconButton.module.css';

const AddIconButton = ({ children }) => (
  <button type="button" className={styles.iconButton}>
    {children}
  </button>
);

export default AddIconButton;
