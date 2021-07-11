import React from 'react';
import styles from './BasketButton.module.css';

const BasketButton = ({ children, onDelete, projectId, sprintId, taskId }) => (
  <button
    type="button"
    className={styles.basket}
    onClick={() => onDelete(projectId, sprintId, taskId)}
  >
    {children}
  </button>
);

export default BasketButton;
