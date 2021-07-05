// Libraries
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

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
import { projectsOperations } from '../../redux/projects';
import { projectsSelectors } from '../../redux/projects';
import { currentProjectSelectors } from '../../redux/current-project';

// Styles
import styles from './SprintsPage.module.css';

const { getCurrentProjectSprints } = currentProjectSelectors;

// const sprints = [
//   {
//     id: '1asdfg',
//     title: 'string1 много слов очень много!',
//     startDate: '24 June',
//     duration: 33,
//   },
//   {
//     id: '1sdfghj',
//     title: 'string2',
//     startDate: '24 June',
//     duration: 4,
//   },
//   {
//     id: '1dfghvbm',
//     title: 'string3',
//     startDate: '24 June',
//     duration: 5,
//   },
//   {
//     id: 'fgfgggzs',
//     title: 'string4',
//     startDate: '24 June',
//     duration: 5,
//   },
// ];

const SprintsPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector(projectsSelectors.getProjectsItems);
  const { projectId } = useParams();
  const sprints = useSelector(getCurrentProjectSprints);
  // console.log(sprints);

  const [users, setUsers] = useState([]);
  const handleSubmit = user => {
    //console.log('user:', newUser);
    setUsers(prevState => [user, ...prevState]);
  };

  const [isCreateSprintModalShown, setCreateSprintModalIsShown] =
    useState(false);
  const [isAddPeopleModalShown, setAddPeopleModalIsShown] = useState(false);

  /*Create sprint*/
  const toggleCreateSprintModal = useCallback(() => {
    setCreateSprintModalIsShown(prevValue => !prevValue);
  }, []);

  /*Add people*/
  const toggleAddPeopleModal = useCallback(() => {
    setAddPeopleModalIsShown(prevValue => !prevValue);
  }, []);

  useEffect(() => {
    dispatch(projectsOperations.getProjectInfo(projectId));
  }, [dispatch, projectId]);

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
        <div className={styles.addSprintButton}>
          <AddButton onClick={toggleCreateSprintModal} />
          <p className={styles.createSprint}>Create a sprint</p>
        </div>
        <h3 className={styles.subject} onClick={toggleAddPeopleModal}>
          Add people
        </h3>
        {/*<p cllassName={styles.text}> Ваш проект не має спринтів, скористайтесь кнопкою "Створити спринт"</p>*/}
        <SprintList sprints={sprints} />
        {isAddPeopleModalShown && (
          <Modal title={'Add people'} onClose={toggleAddPeopleModal}>
            <FormAddPeople onSubmit={handleSubmit} users={users} />
          </Modal>
        )}
        {isCreateSprintModalShown && (
          <Modal title={'Creating a sprint'} onClose={toggleCreateSprintModal}>
            <FormCreateSprint />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SprintsPage;
