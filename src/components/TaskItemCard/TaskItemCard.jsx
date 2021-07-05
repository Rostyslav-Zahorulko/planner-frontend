import st from './TaskItemCard.module.css';
import { useDispatch } from 'react-redux';
import { tasksOperations } from '../../redux/tasks/';

export default function TaskItemCard({
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
            <input className={st.hoursPerDay_input}></input>
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
