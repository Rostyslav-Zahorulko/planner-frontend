import st from './TaskItemCard.module.css';
import search from '../../images/search.svg';

export default function TaskItemCard({
  id,
  title,
  planHours,

  totalHours,
}) {
  return (
    <div className={st.list_sprint}>
      <ul className={st.list_sprint}>
        <li className={st.list_sprint_item}>
          <h3 className={st.title}>{title}</h3>
          <p className={st.list_sprint_item_title}>
            Заплановано годин
            <span>{planHours}</span>
          </p>

          <p className={st.list_sprint_item_title}>
            Витрачено год / день
            <input className={st.hoursPerDay_input}></input>
          </p>
          <p className={st.list_sprint_item_title}>
            Витрачено годин <span>{totalHours}</span>
          </p>
          <p className={st.list_sprint_item_title}>
            <button className={st.delete_btn} type='button'></button>
          </p>
        </li>
      </ul>
      {/* <li className={st.list_sprint_item}>
          <img
            className={st.search}
            src={search}
            alt="search"
            width="20"
            height="20"
          />
        </li> */}
    </div>
  );
}
