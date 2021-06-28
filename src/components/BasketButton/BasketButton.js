import React from 'react';
import styles from './BasketButton.module.css';

const BasketButton = ({ children }) => (
  <div className={styles.basket_button}>
    <button type="button" className={styles.basket}>
      {children}
    </button>
  </div>
);

export default BasketButton;
