import styles from './ChangeTitleInput.module.css';

const ChangeTitleInput = () => (
  <label className={styles.label}>
    <input
      className={styles.input}
      placeholder=" "
      maxLength="30"
      type="text"
      required
    />
    <span className={styles.headline}>New title</span>
  </label>
);

export default ChangeTitleInput;
