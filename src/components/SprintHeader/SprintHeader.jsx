import st from './SprintHeader.module.css';
import { useState } from 'react';

import SearchButton from '../SearchButton';
import TasksSearchInput from '../TasksSearchInput';

const SprintHeader = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className={st.sprint_header}>
      <div className={st.title_sprint}>
        <p className={st.list_sprint_item}>Task</p>
        <p className={st.list_sprint_item}>Scheduled hours</p>
        <p className={st.list_sprint_item}>Spent hour / day</p>
        <p className={st.list_sprint_item}>Hours spent</p>
      </div>
      <div className={st.search_input}>
        {searchActive && (
          <TasksSearchInput onBlur={() => setSearchActive(false)} />
        )}
        <SearchButton onClick={() => setSearchActive(true)} />
      </div>
    </div>
  );
};

export default SprintHeader;
