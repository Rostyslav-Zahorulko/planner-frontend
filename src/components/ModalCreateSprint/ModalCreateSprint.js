import styles from './ModalCreateSprint.module.css';

const ModalCreateSprint = ({ onReady, onCancel }) => (
  <div className={styles.backdrop}>
    <div className={styles.modal}>
      <h2>Creating a sprint</h2>
      <input></input>
      <input></input>
      <button onClick={onReady}>Ready</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  </div>
);
export default ModalCreateSprint;
