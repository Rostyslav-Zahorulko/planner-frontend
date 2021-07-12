import React from 'react';
import styles from './BasketButton.module.css';

const BasketButton = ({ children, onDelete }) => (
  <button type="button" className={styles.basket} onClick={onDelete}>
    {children}
  </button>
);

export default BasketButton;
