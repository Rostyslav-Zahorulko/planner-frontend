import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import s from './ProjectsPage.module.css';
// БАЗА ДЛЯ ПРОВЕРКИ (ЕСЛИ НЕ ЗАПУЩЕН БЭК)
// import projects from '../../data/projects.json';

import projectsOperations from '../../redux/projects/projects-operations';
import { getProjectsItems } from '../../redux/projects/projects-selectors';

// Components
import ProjectsList from '../../components/ProjectsList';
import AddButton from '../../components/AddButton';

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const projects = useSelector(getProjectsItems);

  // СДЕЛАТЬ КОГДА БУДЕТ МОДАЛКА
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
            <AddButton />
            <p className={s.btnText}>Create a project</p>
          </div>
        </div>
        {projects.length > 0 ? (
          <ProjectsList projects={projects} />
        ) : (
          <div className={s.noProjects}>No projects added yet</div>
        )}
      </div>
    </>
  );
}
