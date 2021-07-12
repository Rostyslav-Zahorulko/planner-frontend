
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { toast } from 'react-toastify';

import BasketButton from '../BasketButton';

import st from './TaskItem.module.css';

import { tasksOperations, tasksSelectors } from '../../redux/tasks';
import { currentSprintSelectors } from '../../redux/current-sprint';

dayjs.extend(customParseFormat);

export default function TaskItem({ projectId, sprintId, taskId }) {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelectors.getTasks);
  const displayedDate = useSelector(
    currentSprintSelectors.getCurrentSprintDisplayedDate,
  );
  const task = tasks.find(task => task.id === taskId);
  const { title, plannedHours, totalHours } = task;

  const [currentDay, setCurrentDay] = useState({ date: '', hoursSpent: '0' });

  const handleHoursPerDayChange = e => {
    e.preventDefault();
    const standartDisplayedDate = dayjs(displayedDate, 'DD.MM.YYYY').format(
      'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
    );

    if (isNaN(e.target.value)) {
      console.log('Please enter a number');
      toast.error('Please enter a number');
      return;
    }

    setCurrentDay({
      date: standartDisplayedDate,
      hoursSpent: +e.target.value,
    });
  };

  const handleHoursPerDayBlur = e => {
    e.preventDefault();
    const standartDisplayedDate = dayjs(displayedDate, 'DD.MM.YYYY').format(
      'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
    );

    if (!e.target.value) {
      setCurrentDay({
        date: standartDisplayedDate,
        hoursSpent: 0,
      });
    }

    if (currentDay.hoursSpent >= 0) {
      dispatch(
        tasksOperations.updateHoursPerDay(
          projectId,
          sprintId,
          taskId,
          currentDay,
        ),
      );
    } else {
      console.log('Please enter a non-negative integer');
      toast.error('Please enter a non-negative integer');
    }
  };

  useEffect(() => {
    const standartDisplayedDate = dayjs(displayedDate, 'DD.MM.YYYY').format(
      'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
    );
    const task = tasks.find(task => task.id === taskId);
    const day = task.hoursPerDay.find(
      day => day.date === standartDisplayedDate,
    );
    setCurrentDay(day);
  }, [displayedDate, taskId, tasks]);

  return (
    <li className={st.listItem}>
      <h3 className={st.title}>{title}</h3>

      <div className={st.sprint_desc}>
        <p className={st.list_sprint_item_title}>Scheduled hours</p>
        <span className={st.planHours}>{plannedHours}</span>
      </div>

      <div className={st.sprint_desc}>
        <p className={st.list_sprint_item_title}>Spent hour / day</p>
        <label className={st.hoursPerDay_wrapper_input}>
          <input
            type="text"
            value={currentDay.hoursSpent}
            onChange={e => handleHoursPerDayChange(e)}
            onBlur={e => handleHoursPerDayBlur(e)}
            className={st.hoursPerDay_input}
          />
        </label>
      </div>

      <div className={st.sprint_desc}>
        <p className={st.list_sprint_item_title}>Hours spent</p>
        <span className={st.totalHours}>{totalHours}</span>
      </div>
      <div className={st.basketButton}>
        <BasketButton
          type="button"
          onDelete={() => dispatch(tasksOperations.deleteTask( projectId,
          sprintId,
          taskId,))}
          aria-label="delete"
       />
      </div>
    </li>
  );
}

