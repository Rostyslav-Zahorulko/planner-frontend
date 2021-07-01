import React from 'react';
import styles from './BasketButton.module.css';

const BasketButton = ({ children }) => (
  <button type="button" className={styles.basket}>
    {children}
  </button>
);

export default BasketButton;
