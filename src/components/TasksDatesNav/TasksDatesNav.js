import { useSelector, useDispatch } from 'react-redux';

// Styles
import s from './TasksDatesNav.module.css';

// Components
import { ReactComponent as LeftIcon } from '../../images/arrow-left.svg';
import { ReactComponent as RightIcon } from '../../images/arrow-right.svg';

// redux
import { currentSprintOperations } from '../../redux/current-sprint';
import { currentSprintSelectors } from '../../redux/current-sprint';
const { getCurrentSprintDisplayedDate, getCurrentSprintDuration } =
  currentSprintSelectors;
const { setNextDate, setPreviousDate } = currentSprintOperations;

export default function TasksDatesNav({ sprintDates }) {
  const dispatch = useDispatch();
  const displayedDate = useSelector(getCurrentSprintDisplayedDate);
  const duration = useSelector(getCurrentSprintDuration);
  const displayedDay =
    sprintDates.findIndex(date => date === displayedDate) + 1;

  const handleForwardClick = () => {
    dispatch(setNextDate(displayedDate));
  };
  const handleBackClick = () => {
    dispatch(setPreviousDate(displayedDate));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.daysPanel}>
        {displayedDay > 1 && (
          <button
            type="button"
            className={`${s.btn} ${s.daysPanelItem}`}
            onClick={handleBackClick}
          >
            <LeftIcon className={s.icon} width="8px" height="12px" />
          </button>
        )}

        <span className={`${s.days} ${s.daysPanelItem}`}>
          <span className={s.currentDay}>{displayedDay}</span>
          <span className={s.daysTotal}>/{duration}</span>
        </span>

        {displayedDay < duration && (
          <button
            type="button"
            className={`${s.btn} ${s.daysPanelItem}`}
            onClick={handleForwardClick}
          >
            <RightIcon className={s.icon} width="8px" height="12px" />
          </button>
        )}
      </div>
      <div className={s.date}>{displayedDate}</div>
    </div>
  );
}
