import styles from './FormSideBar.module.css';

const FormSideBar = () => {
  return (
    <div>
      <label className={styles.label}>
        <input className={styles.input} placeholder=" " />
        <span className={styles.headline}>Project name</span>
      </label>
      <label className={styles.label}>
        <input className={styles.input} placeholder=" " />
        <span className={styles.headline}>Description</span>
      </label>
    </div>
  );
};
export default FormSideBar;
