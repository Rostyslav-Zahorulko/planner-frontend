// Libraries
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation, useHistory } from 'react-router';

// Components
import SidebarProjectsList from '../../components/SidebarProjectsList';
import SprintList from '../../components/SprintsList';
import PageTitle from '../../components/PageTitle';
import AddButton from '../../components/AddButton';
import SidebarForReuse from '../../components/SidebarForReuse';
import Modal from '../../components/Modal';
import CreateProjectForm from '../../components/CreatePojectForm';
import FormAddPeople from '../../components/FormAddPeople';
import FormCreateSprint from '../../components/FormCreateSprint';

// Styles
import styles from './SprintsPage.module.css';

// Redux
import { projectsOperations } from '../../redux/projects';
import { projectsSelectors } from '../../redux/projects';
import { sprintsSelectors } from '../../redux/sprints';
import { currentProjectSelectors } from '../../redux/current-project';

const { getProjectInfo, getProjects, editProjectTitle } = projectsOperations;
const { getProjectsItems } = projectsSelectors;
const { getSprintsItems } = sprintsSelectors;
const {
  getCurrentProjectTitle,
  getCurrentProjectDescription,
  getCurrentProjectTeam,
} = currentProjectSelectors;

const SprintsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { projectId } = useParams();
  const projects = useSelector(getProjectsItems);
  const sprints = useSelector(getSprintsItems);
  const title = useSelector(getCurrentProjectTitle);
  const description = useSelector(getCurrentProjectDescription);
  const users = useSelector(getCurrentProjectTeam);

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

  /*Show sprints btn for sidebar*/
  const handleGoBack = () => {
    history.push(location?.state?.from?.location ?? '/projects');
  };

  /*Change project title*/
  const handleProjectTitleChange = newTitle => {
    if (title !== newTitle && newTitle !== '') {
      dispatch(editProjectTitle(projectId, newTitle));
    }
  };

  useEffect(() => {
    dispatch(getProjectInfo(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <div className={styles.project}>
      <SidebarForReuse
        text={'project'}
        onOpen={toggleCreateProjectModal}
        onClick={handleGoBack}
      >
        <SidebarProjectsList projects={projects} />
      </SidebarForReuse>

      <div className={styles.sprints}>
        <PageTitle
          title={title}
          onChangeTitle={newTitle => handleProjectTitleChange(newTitle)}
        />
        <p className={styles.project_desc}>{description}</p>

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
            <FormAddPeople
              projectId={projectId}
              users={users}
              onClose={toggleAddPeopleModal}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SprintsPage;
