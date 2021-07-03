import styles from './FormCreateSprint.module.css';

const FormCreateSprint = ({ title }) => (
  <div className={styles.wrapper}>
    <h2>{title}</h2>
    <div className={styles.input_modal}>
      <label className={styles.label}>
        <input className={styles.input} placeholder=" " />
        <span className={styles.headline}>The name of the sprint</span>
      </label>

      <div className={styles.inner_radio}>
        <label className={styles.label_radio}>
          <input
            className={styles.input_radio}
            type="radio"
            checked="prev-date"
            value="prev-date"
          />
          <span className={styles.headline_radio}>Previous days</span>
        </label>
      </div>

      <div className={styles.inner}>
        <label className={styles.label_picker}>
          <input className={styles.input} placeholder=" " />
          <span className={styles.headline}>End date</span>
        </label>
        <label className={styles.label}>
          <input className={styles.input} placeholder=" " />
          <span className={styles.headline}>Duration</span>
        </label>
      </div>
    </div>
  </div>
);
export default FormCreateSprint;
