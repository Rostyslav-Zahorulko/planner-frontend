import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import * as dayjs from 'dayjs';

import BasketButton from '../BasketButton';
import styles from './SprintItem.module.css';

// REDUX
import { sprintsOperations } from '../../redux/sprints';

export default function SprintItem({ sprint }) {
  const { id, title, startDate, duration } = sprint;
  const endDate = dayjs(startDate).add(duration, 'day');
  const normalizeDate = date => {
    const displayedDate = dayjs(date).format('D MMM');
    return displayedDate;
  };
  const displayedStartDate = normalizeDate(startDate);
  const displayedEndDate = normalizeDate(endDate);

  const { projectId } = useParams();
  const dispatch = useDispatch();

  return (
    <li className={styles.sprint_item}>
      <Link to={`/projects/${projectId}/${id}`} className={styles.link}>
        <h3 className={styles.sprint_subject}>{title}</h3>
        <p className={styles.sprint_desc}>
          Start date
          <span className={styles.sprint_desc_item}>{displayedStartDate}</span>
        </p>
        <p className={styles.sprint_desc}>
          End date
          <span className={styles.sprint_desc_item}>{displayedEndDate}</span>
        </p>
        <p className={styles.sprint_desc}>
          Duration
          <span className={styles.sprint_desc_item}>{duration}</span>
        </p>
      </Link>
      <BasketButton
        type="button"
        onDelete={() => dispatch(sprintsOperations.deleteSprint(projectId, id))}
        aria-label="delete"
      />
    </li>
  );
}
