import st from './TaskItemCard.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import { tasksOperations, tasksSelectors } from '../../redux/tasks/';
import {
  currentSprintSelectors,
} from '../../redux/current-sprint';

// dayjs
import * as dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export default function TaskItemCard({ projectId, sprintId, taskId }) {
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
      hoursSpent: e.target.value,
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
        hoursSpent: '0',
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
    <div className={st.list_sprint}>
      <ul>
        <li className={st.list_sprint_item}>
          <h3 className={st.title}>{title}</h3>
          <p className={st.list_sprint_item_title}>
            ScheduledHours
            <span>{plannedHours}</span>
          </p>

          <p className={st.list_sprint_item_title}>
            Spent hour / day
            <input
              type="text"
              value={currentDay.hoursSpent}
              onChange={e => handleHoursPerDayChange(e)}
              onBlur={e => handleHoursPerDayBlur(e)}
              className={st.hoursPerDay_input}
            ></input>
          </p>
          <p className={st.list_sprint_item_title}>
            Hours spent <span>{totalHours}</span>
          </p>
          <p className={st.list_sprint_item_title}>
            <button
              className={st.delete_btn}
              type="button"
              onClick={() =>
                dispatch(
                  tasksOperations.deleteTask(projectId, sprintId, taskId),
                )
              }
            ></button>
          </p>
        </li>
      </ul>
    </div>
  );
}
