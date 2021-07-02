import { useState, useCallback } from 'react';

import AddButton from '../AddButton';
import Modal from '../Modal';
import styles from './SidebarAddButton.module.css';
const SidebarAddButton = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevValue => !prevValue);
  }, []);
  /*const handleDeleteSprint = id => {
    setShowModal(true);
  };*/
  return (
    <div className={styles.sidebar_add_button}>
      <AddButton onClick={toggleModal} />
      <p className={styles.create_project_text}>Create a project</p>
      {showModal && (
        <Modal title={'Creating a project'} onClose={toggleModal}>
          <div>
            {' '}
            {/* создать компонент*/}
            <label className={styles.label}>
              <input className={styles.input} placeholder=" " />
              <span className={styles.headline}>Project name</span>
            </label>
            <label className={styles.label}>
              <input className={styles.input} placeholder=" " />
              <span className={styles.headline}>The name of the sprint</span>
            </label>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default SidebarAddButton;
