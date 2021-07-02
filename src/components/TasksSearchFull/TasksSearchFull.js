import s from './TasksSearchFull.module.css';

import SearchButton from '../SearchButton';

export default function TasksSearchFull({ value, onChange }) {
  return (
    <div className={s.wrapper}>
      <SearchButton onClick={() => {}} />
      <label className={s.shownInput}>
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
