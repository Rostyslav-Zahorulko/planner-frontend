import s from './TasksSearchFull.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from '../../redux/tasks/tasks-selectors';
import * as tasksActions from '../../redux/tasks/tasks-actions';
import SearchButton from '../SearchButton';

export default function TasksSearchFull() {
const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    // console.log(e.currentTarget.value);
    dispatch(tasksActions.changeFilter(e.currentTarget.value))
  }

  return (
    <div className={s.wrapper}>
      <SearchButton onClick={() => {}} />
      <label className={s.shownInput}>
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}
