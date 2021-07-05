import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ title, children, onClose }) {
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
        <h2 className={s.ModalTitle}>{title}</h2>
        {children}
      </div>
    </div>,
    modalRoot,
  );
}
