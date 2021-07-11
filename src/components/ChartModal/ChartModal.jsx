import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './ChartModal.module.css';
import styleButton from '../Modal/Modal.module.css';

const ChartModalRoot = document.querySelector('#chart-modal-root');

const ChartModal = ({ onClose, children }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styleButton.ModalCloseBtn} onClick={onClose}>
          +
        </button>
        {children}
      </div>
    </div>,
    ChartModalRoot,
  );
};

export default ChartModal;
