import styles from './ChangeTitleInput.module.css';

const ChangeTitleInput = () => (
  <label className={styles.label}>
    <input
      className={styles.input}
      placeholder=" "
      maxlength="30"
      type="text"
      required
    />
    <span className={styles.headline}>The name of the "title"</span>
  </label>
);
export default ChangeTitleInput;
