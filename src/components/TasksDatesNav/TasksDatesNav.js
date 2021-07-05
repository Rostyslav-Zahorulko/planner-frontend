import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

// Styles
import s from './TasksDatesNav.module.css';

// Components
import { ReactComponent as LeftIcon } from '../../images/arrow-left.svg';
import { ReactComponent as RightIcon } from '../../images/arrow-right.svg';

// redux
import { currentSprintSelectors } from '../../redux/current-sprint';
const { getCurrentSprintDisplayedDate } = currentSprintSelectors;

export default function TasksDatesNav() {
  const displayedDay = useSelector(getCurrentSprintDisplayedDate);

  return (
    <div className={s.wrapper}>
      <div className={s.daysPanel}>
        <button
          type="button"
          className={`${s.btn} ${s.daysPanelItem}`}
          onClick={() => {}}
        >
          <LeftIcon className={s.icon} width="8px" height="12px" />
        </button>

        <span className={`${s.days} ${s.daysPanelItem}`}>
          <span className={s.currentDay}>1</span>
          <span className={s.daysTotal}>/10</span>
        </span>

        <button
          type="button"
          className={`${s.btn} ${s.daysPanelItem}`}
          onClick={() => {}}
        >
          <RightIcon className={s.icon} width="8px" height="12px" />
        </button>
      </div>
      <div className={s.date}>{displayedDay}</div>
    </div>
  );
}
