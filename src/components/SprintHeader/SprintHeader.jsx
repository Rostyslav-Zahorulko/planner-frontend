import st from './SprintHeader.module.css';

import search from '../../images/search.svg';

const SprintHeader = () => {
  return (
    <div className={st.title_sprint}>
      <ul className={st.list_sprint}>
        <li className={st.list_sprint_item}>Задача</li>
        <li className={st.list_sprint_item}>Заплановано годин</li>
        <li className={st.list_sprint_item}>Витрачено год / день</li>
        <li className={st.list_sprint_item}>Витрачено годин</li>
        <li className={st.list_sprint_item}>
          <img className={st.search} src={search} alt="search" />
        </li>
      </ul>
    </div>
  );
};

export default SprintHeader;
