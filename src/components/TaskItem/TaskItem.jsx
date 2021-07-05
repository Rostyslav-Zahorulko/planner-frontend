import st from './TaskItem.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { tasksOperations } from '../../redux/tasks/';

export default function TaskItem({
  title,
  plannedHours,
  hoursPerDay,
  totalHours,
  projectId,
  sprintId,
  taskId,
}) {
  const dispatch = useDispatch();

  return (
    <li className={st.listItem}>
      <ul className={st.listItem_tasks}>
        <li className={st.title}>{title}</li>
        <li className={st.planHours}>{plannedHours}</li>
        <li className={st.hoursPerDay}>
          hoursPerDay
          <div className={st.hoursPerDay_wrapper}>
            <div className={st.hoursPerDay_wrapper_input}>
              <input className={st.hoursPerDay_input}></input>
            </div>
          </div>
        </li>
        <li className={st.totalHours}>{totalHours}</li>
        <li className={st.delete_item}>
          <button
            className={st.delete_btn}
            type="button"
            onClick={() =>
              dispatch(tasksOperations.deleteTask(projectId, sprintId, taskId))
            }
          ></button>
        </li>
      </ul>
    </li>
  );
}
