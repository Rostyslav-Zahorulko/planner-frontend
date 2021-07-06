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
import CreateProjectForm from '../../components/CreatePojectForm';
import FormAddPeople from '../../components/FormAddPeople';
import FormCreateSprint from '../../components/FormCreateSprint';

// Redux
import { projectsOperations } from '../../redux/projects';
import { projectsSelectors } from '../../redux/projects';
// import { sprintsOperations } from '../../redux/sprints';
import { sprintsSelectors } from '../../redux/sprints';

// Styles
import styles from './SprintsPage.module.css';

const SprintsPage = () => {
  const { getProjectInfo } = projectsOperations;
  const { getProjectsItems } = projectsSelectors;
  // const { getAllSprints } = sprintsOperations;
  const { getSprintsItems } = sprintsSelectors;

  const dispatch = useDispatch();
  const { projectId } = useParams();
  const projects = useSelector(getProjectsItems);
  const sprints = useSelector(getSprintsItems);

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
  }, [dispatch, projectId, getProjectInfo]);

  // useEffect(() => {
  //   dispatch(getAllSprints(projectId));
  // }, [dispatch, projectId, getProjectInfo, getAllSprints]);

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

        {sprints.length > 0 ? (
          <SprintList sprints={sprints} />
        ) : (
          <div>You have no sprints yet</div>
        )}

        {isCreateProjectModalShown && (
          <Modal
            title={'Creating a project'}
            onClose={toggleCreateProjectModal}
          >
            <CreateProjectForm onClose={toggleCreateProjectModal} />
          </Modal>
        )}

        {isCreateSprintModalShown && (
          <Modal title={'Creating a sprint'} onClose={toggleCreateSprintModal}>
            <FormCreateSprint
              projectId={projectId}
              onClose={toggleCreateSprintModal}              
            />
          </Modal>
        )}

        {isAddPeopleModalShown && (
          <Modal title={'Add people'} onClose={toggleAddPeopleModal}>
            <FormAddPeople users={users} onClose={toggleAddPeopleModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SprintsPage;
