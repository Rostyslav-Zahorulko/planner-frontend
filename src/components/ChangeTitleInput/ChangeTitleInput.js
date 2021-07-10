import styles from './ChangeTitleInput.module.css';

const ChangeTitleInput = ({ value, onChange, onBlur, onKeyPress }) => (
  <label className={styles.label}>
    <input
      className={styles.input}
      maxLength="30"
      type="text"
      required
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
      autoFocus
    />
    <span className={styles.headline}>New title</span>
  </label>
);

export default ChangeTitleInput;
