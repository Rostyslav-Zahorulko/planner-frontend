import st from './TaskItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import deleteTask from '../../redux/tasks/tasks-operations';

export default function TaskItem({
  sprintId,
  id,
  title,
  plannedHours,
  hoursPerDay,
  totalHours,
}) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => dispatch(deleteTask(sprintId, id));
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
            onClick={handleDeleteClick}
          ></button>
        </li>
      </ul>
    </li>
  );
}
