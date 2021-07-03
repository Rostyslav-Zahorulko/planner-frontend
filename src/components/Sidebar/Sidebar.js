import { useState, useCallback } from 'react';

import BackButton from '../BackButton';
import AddButton from '../AddButton';
import Modal from '../Modal';
import styles from './Sidebar.module.css';

const Sidebar = ({ text, modalTitle, modalContent, children }) => {
  const [isShown, setIsShown] = useState(false);

  const toggleModal = useCallback(() => {
    setIsShown(prevIsShown => !prevIsShown);
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <BackButton className={styles.backBtn} />
        <p className={styles.text}>Show {text.concat('s')}</p>
      </div>
      {children}

      <div className={styles.container}>
        <AddButton onClick={toggleModal} />
        <p className={styles.text}>Create a {text}</p>
      </div>

      {isShown && (
        <Modal title={modalTitle} onClose={toggleModal}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
};

export default Sidebar;