// Libraries
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import ProjectsList from '../../components/ProjectsList';
import AddButton from '../../components/AddButton';
import CreateProjectModal from '../../components/CreateProjectModal';

// Redux 
import projectsOperations from '../../redux/projects/projects-operations';
import { getProjectsItems } from '../../redux/projects/projects-selectors';

// Styles
import s from './ProjectsPage.module.css';

// БАЗА ДЛЯ ПРОВЕРКИ (ЕСЛИ НЕ ЗАПУЩЕН БЭК)
// import projects from '../../data/projects.json';

export default function ProjectsPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);
  
  const dispatch = useDispatch();
  
  const projects = useSelector(getProjectsItems);  

  // TODO: СДЕЛАТЬ, КОГДА БУДЕТ МОДАЛКА
  // const onAddProject = value => dispatch(projectsOperations.addProject(value));

  useEffect(() => {
    dispatch(projectsOperations.getProjects());
  }, [dispatch]);
  
  return (
    <>
      <div className={s.container}>
        <div className={s.headbar}>
          <h1 className={s.title}>Projects</h1>
          <div className={s.btnWrapper}>
            <AddButton onClick={toggleModal} />
            <p className={s.btnText}>Create a project</p>
          </div>
        </div>
        {projects.length > 0 ? (
          <ProjectsList projects={projects} />
        ) : (
          <div className={s.noProjects}>No projects added yet</div>
        )}
        {showModal && <CreateProjectModal onClose={toggleModal} />}
      </div>
    </>
  );
}