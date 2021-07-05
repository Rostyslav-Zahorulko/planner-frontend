import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import * as dayjs from 'dayjs';

// Styles
import s from './TasksDatesNav.module.css';

// Components
import { ReactComponent as LeftIcon } from '../../images/arrow-left.svg';
import { ReactComponent as RightIcon } from '../../images/arrow-right.svg';

// redux
import { currentSprintOperations } from '../../redux/current-sprint';
import { currentSprintSelectors } from '../../redux/current-sprint';
const {
  getCurrentSprintDisplayedDate,
  getCurrentSprintDuration,
  getCurrentSprintStartDate,
} = currentSprintSelectors;
const { setNextDate, setPreviousDate } = currentSprintOperations;

export default function TasksDatesNav() {
  const dispatch = useDispatch();
  const displayedDate = useSelector(getCurrentSprintDisplayedDate);
  const startDate = useSelector(getCurrentSprintStartDate);
  const duration = useSelector(getCurrentSprintDuration);
  const array = new Array(duration).fill('');
  const sprintDates = array.map((item, ind) => {
    const date = dayjs(startDate).add(ind, 'day').format('DD.MM.YYYY');
    return date;
  });
  const displayedDay =
    sprintDates.findIndex(date => date === displayedDate) + 1;

  const handleForwardClick = () => dispatch(setNextDate(displayedDate));
  const handleBackClick = () => dispatch(setPreviousDate(displayedDate));

  return (
    <div className={s.wrapper}>
      <div className={s.daysPanel}>
        <button
          type="button"
          className={`${s.btn} ${s.daysPanelItem}`}
          onClick={handleBackClick}
        >
          <LeftIcon className={s.icon} width="8px" height="12px" />
        </button>

        <span className={`${s.days} ${s.daysPanelItem}`}>
          <span className={s.currentDay}>{displayedDay}</span>
          <span className={s.daysTotal}>/{duration}</span>
        </span>

        <button
          type="button"
          className={`${s.btn} ${s.daysPanelItem}`}
          onClick={handleForwardClick}
        >
          <RightIcon className={s.icon} width="8px" height="12px" />
        </button>
      </div>
      <div className={s.date}>{displayedDate}</div>
    </div>
  );
}
