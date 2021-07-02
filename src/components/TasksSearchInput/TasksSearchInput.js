import s from './TasksSearchInput.module.css';

export default function TasksSearchInput({ value, onChange, onBlur }) {
  return (
    <label className={s.label}>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
        autoFocus
        placeholder="Your search"
        onBlur={onBlur}
      />
    </label>
  );
}
