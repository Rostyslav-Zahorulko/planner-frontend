// Libraries
import { useState, useCallback } from 'react';

// Components
import SidebarProjectsList from '../../components/SidebarProjectsList';
import SprintList from '../../components/SprintsList';
import ProjectName from '../../components/ProjectName';
import AddButton from '../../components/AddButton';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';
import FormAddPeople from '../../components/FormAddPeople';
import FormCreateSprint from '../../components/FormCreateSprint';

// Redux
// ...

// Styles
import styles from './SprintsPage.module.css';

const sprints = [
  {
    id: '1asdfg',
    title: 'string1 много слов очень много!',
    startDate: '24 June',
    duration: 33,
  },
  {
    id: '1sdfghj',
    title: 'string2',
    startDate: '24 June',
    duration: 4,
  },
  {
    id: '1dfghvbm',
    title: 'string3',
    startDate: '24 June',
    duration: 5,
  },
  {
    id: 'fgfgggzs',
    title: 'string4',
    startDate: '24 June',
    duration: 5,
  },
];

const SprintsPage = () => {
  const [isCreateSprintModalShown, setCreateSprintModalIsShown] = useState(false);
  const [isAddPeopleModalShown, setAddPeopleModalIsShown] = useState(false);
  
  /*Create sprint*/
  const toggleCreateSprintModal = useCallback(() => {
    setCreateSprintModalIsShown(prevValue => !prevValue);
  }, []);
  
  /*Add people*/
  const toggleShowAddPeopleModal = useCallback(() => {
    setAddPeopleModalIsShown(prevValue => !prevValue);
  }, []);

  return (
    <div className={styles.project}>
      <Sidebar
        text={'project'}
        modalTitle={'Creating a project'}
        modalContent={'Тут повинен бути компонент форми для створення проекту'}
      >
        <SidebarProjectsList projects={projects} />
      </Sidebar>

      <div className={styles.sprints}>
        <ProjectName />
        <div className={styles.addButtonSprint}>
          <AddButton onClick={toggleCreateSprintModal} />
          <p className={styles.createSprint}>Create a sprint</p>
        </div>

        // Треба переробити на кнопку
        <h3
          className={styles.subject}
          //onClick={}
        >
          Add people
        </h3>

        {/*<p cllassName={styles.text}> Ваш проект не має спринтів, скористайтесь кнопкою "Створити спринт"</p>*/}
        <SprintList sprints={sprints} />
         
        {isAddPeopleModalShown && (
          <Modal title={'Add people'} onClose={toggleModalAddPeople}>
            <FormAddPeople />
          </Modal>
        )}
        
        {isCreateSprintModalShown && (
          <Modal title={'Creating a sprint'} onClose={toggleModal}>
            <FormCreateSprint />
          </Modal>
        )}          
      </div>
    </div>
  );
};

export default SprintsPage;