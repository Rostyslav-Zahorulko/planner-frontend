import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function CreateProjectModal({ children, onClose, onCreate }) {
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

  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <div className={s.ModalBackdrop} onClick={handleBackdropClick}>
      <div className={s.ModalContent}>
        <button className={s.ModalCloseBtn} onClick={handleClose}>
          +
        </button>
        {children}
        <div className={s.ModalBtnWrapper}>
          <button className={s.ModalCreateBtn} onClick={onCreate}>
            Ready
          </button>
          <button className={s.ModalCancelBtn} onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}
