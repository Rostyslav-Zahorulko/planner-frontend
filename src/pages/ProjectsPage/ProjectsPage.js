// Libraries
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import ProjectsList from '../../components/ProjectsList';
import AddButton from '../../components/AddButton';
import Modal from '../../components/Modal';

// Redux
import { projectsOperations } from '../../redux/projects';
import { projectsSelectors } from '../../redux/projects';

// Styles
import s from './ProjectsPage.module.css';

// БАЗА ДЛЯ ПРОВЕРКИ (ЕСЛИ НЕ ЗАПУЩЕН БЭК)
// import projects from '../../data/projects.json';

// const { addProject } = projectsOperations;
const { getProjectsItems } = projectsSelectors;

export default function ProjectsPage() {
  const [isShown, setIsShown] = useState(false);

  const toggleModal = useCallback(() => {
    setIsShown(prevIsShown => !prevIsShown);
  }, []);

  const dispatch = useDispatch();

  const projects = useSelector(getProjectsItems);

  // TODO: СДЕЛАТЬ, КОГДА БУДЕТ МОДАЛКА
  // const onAddProject = value => dispatch(addProject(value));

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
        {isShown && (
          <Modal title={'Creating a project'} onClose={toggleModal}>
            <div>Тут повинен бути компонент форми для створення проекту</div>
          </Modal>
        )}
      </div>
    </>
  );
}
