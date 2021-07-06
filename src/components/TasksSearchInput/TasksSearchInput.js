import s from './TasksSearchInput.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { tasksSelectors } from '../../redux/tasks';
import * as tasksActions from '../../redux/tasks/tasks-actions';

export default function TasksSearchInput() {
  const dispatch = useDispatch();
  const filter = useSelector(tasksSelectors.getFilter);

  const handleFilterChange = e => {
    // console.log(e.currentTarget.value);
    dispatch(tasksActions.changeFilter(e.currentTarget.value));
  };
  return (
    <label className={s.label}>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        autoFocus
        placeholder="Your search"
      />
    </label>
  );
}
