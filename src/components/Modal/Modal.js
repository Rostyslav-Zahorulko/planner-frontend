import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import CreateProjectForm from '../CreatePojectForm';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function CreateProjectModal({
  title,
  children,
  onClose,
  onCreate,
}) {
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

  const handleClose = project => {
    onClose();
  };

  // const handleSubmit = () => {};

  // const [showModal, setShowModal] = useState(false);

  // const toggleModal = useCallback(() => {
  //   setShowModal(prevShowModal => !prevShowModal);
  // }, []);

  return createPortal(
    <div className={s.ModalBackdrop} onClick={handleBackdropClick}>
      <div className={s.ModalContent}>
        <button className={s.ModalCloseBtn} onClick={handleClose}>
          +
        </button>
        <h2 className={s.ModalTitle}>{title}</h2>
        <CreateProjectForm />
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
