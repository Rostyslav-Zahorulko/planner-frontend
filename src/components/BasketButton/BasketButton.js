import React from 'react';
import styles from './BasketButton.module.css';

const BasketButton = ({ children, onDeleteSprint, projectId, sprintId }) => (
  <button
    type="button"
    className={styles.basket}
    onClick={() => onDeleteSprint(projectId, sprintId)}
  >
    {children}
  </button>
);

export default BasketButton;
