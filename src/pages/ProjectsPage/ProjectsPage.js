// Libraries
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import ProjectsList from '../../components/ProjectsList';
import AddButton from '../../components/AddButton';
import Modal from '../../components/Modal';
import CreateProjectForm from '../../components/CreatePojectForm';

// Styles
import s from './ProjectsPage.module.css';

// Redux
import { projectsOperations } from '../../redux/projects';
import { projectsSelectors } from '../../redux/projects';

const { getProjects } = projectsOperations;
const { getProjectsItems } = projectsSelectors;

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjectsItems);

  const [isCreateProjectModalShown, setCreateProjectModalIsShown] =
    useState(false);

  /*Create project*/
  const toggleCreateProjectModal = useCallback(() => {
    setCreateProjectModalIsShown(prevValue => !prevValue);
  }, []);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.headbar}>
        <h1 className={s.title}>Projects</h1>
        <div className={s.btnWrapper}>
          <AddButton onOpen={toggleCreateProjectModal} />
          <p className={s.btnText}>Create a project</p>
        </div>
      </div>

      {projects.length > 0 ? (
        <ProjectsList projects={projects} />
      ) : (
        <div className={s.noProjects}>No projects added yet</div>
      )}

      {isCreateProjectModalShown && (
        <Modal title={'Creating a project'} onClose={toggleCreateProjectModal}>
          <CreateProjectForm onClose={toggleCreateProjectModal} />
        </Modal>
      )}
    </div>
  );
};

export default ProjectsPage;
