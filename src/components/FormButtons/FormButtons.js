import styles from './FormButtons.module.css';

const FormButtons = ({ onClose }) => {
  return (
    <div className={styles.ModalBtnWrapper}>
      <button type="submit" className={styles.ModalCreateBtn}>
        Ready
      </button>
      <button
        type=" button"
        className={styles.ModalCancelBtn}
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  );
};

export default FormButtons;
