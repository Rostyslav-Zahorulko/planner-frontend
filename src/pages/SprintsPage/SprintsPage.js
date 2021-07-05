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

const { getProjectInfo } = projectsOperations;
const { getProjectsItems } = projectsSelectors;
const { getCurrentProjectSprints } = currentProjectSelectors;

const SprintsPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjectsItems);
  const { projectId } = useParams();
  const sprints = useSelector(getCurrentProjectSprints);
  // console.log(sprints);

  const [isCreateProjectModalShown, setCreateProjectModalIsShown] =
    useState(false);

  const [isCreateSprintModalShown, setCreateSprintModalIsShown] =
    useState(false);

  const [isAddPeopleModalShown, setAddPeopleModalIsShown] = useState(false);

  /*Create project*/
  const toggleCreateProjectModal = useCallback(() => {
    setCreateProjectModalIsShown(prevValue => !prevValue);
  }, []);

  /*Create sprint*/
  const toggleCreateSprintModal = useCallback(() => {
    setCreateSprintModalIsShown(prevValue => !prevValue);
  }, []);

  /*Add people*/
  const toggleAddPeopleModal = useCallback(() => {
    setAddPeopleModalIsShown(prevValue => !prevValue);
  }, []);

  useEffect(() => {
    dispatch(getProjectInfo(projectId));
  }, [dispatch, projectId]);

  return (
    <div className={styles.project}>
      <Sidebar text={'project'} onOpen={toggleCreateProjectModal}>
        <SidebarProjectsList projects={projects} />
      </Sidebar>

      <div className={styles.sprints}>
        <ProjectName />

        <div className={styles.addSprintButton}>
          <AddButton onOpen={toggleCreateSprintModal} />
          <p className={styles.createSprint}>Create a sprint</p>
        </div>

        <h3 className={styles.subject} onClick={toggleAddPeopleModal}>
          Add people
        </h3>

        {/*<p cllassName={styles.text}> Ваш проект не має спринтів, скористайтесь кнопкою "Створити спринт"</p>*/}
        <SprintList sprints={sprints} />

        {isCreateProjectModalShown && (
          <Modal
            title={'Creating a project'}
            onCLose={toggleCreateProjectModal}
          >
            Тут повинен бути компонент форми для створення проекту
          </Modal>
        )}

        {isCreateSprintModalShown && (
          <Modal title={'Creating a sprint'} onClose={toggleCreateSprintModal}>
            <FormCreateSprint
              onClose={toggleCreateSprintModal}
              projectId={projectId}
            />
          </Modal>
        )}

        {isAddPeopleModalShown && (
          <Modal title={'Add people'} onClose={toggleAddPeopleModal}>
            <FormAddPeople />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SprintsPage;
