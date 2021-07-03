import { useState, useCallback } from 'react';

import AddButton from '../AddButton';
import Modal from '../Modal';
import FormSideBar from '../FormSideBar';
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
          <FormSideBar />
        </Modal>
      )}
    </div>
  );
};
export default SidebarAddButton;