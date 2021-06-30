import st from './TaskItem.module.css';

export default function TaskItem({
  id,
  title,
  planHours,
  hoursPerDay,
  totalHours,
}) {
  return (
    <li className={st.listItem}>
      <ul className={st.listItem_tasks}>
        <li className={st.title}>{title}</li>
        <li className={st.planHours}>{planHours}</li>
        <li className={st.hoursPerDay}>
          {hoursPerDay}
          <div className={st.hoursPerDay_wrapper}>
            <div className={st.hoursPerDay_wrapper_input}>
              <input className={st.hoursPerDay_input}></input>
            </div>
          </div>
        </li>
        <li className={st.totalHours}>{totalHours}</li>
        <li className={st.delete_item}>
          <button className={st.delete_btn}></button>
        </li>
      </ul>
    </li>
  );
}
