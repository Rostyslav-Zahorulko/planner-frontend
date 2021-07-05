import React from 'react';
import BasketButton from '../BasketButton';
import styles from './SprintItem.module.css';

const SprintItem = ({ sprint }) => (
  <li className={styles.sprint_item}>
    <h3 className={styles.sprint_subject}>{sprint.title}</h3>
    <p className={styles.sprint_desc}>
      Start date
      <span className={styles.sprint_desc_item}>24 Jun</span>
    </p>
    <p className={styles.sprint_desc}>
      End date
      <span className={styles.sprint_desc_item}>08 Jul</span>
    </p>
    <p className={styles.sprint_desc}>
      Duration
      <span className={styles.sprint_desc_item}>{sprint.duration}</span>
    </p>
    <BasketButton
      type="button"
      // onClick={}
      aria-label="delete"
    ></BasketButton>
  </li>
);

export default SprintItem;
