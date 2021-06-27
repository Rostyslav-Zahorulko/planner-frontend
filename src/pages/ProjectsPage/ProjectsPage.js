import React from 'react';
import s from './ProjectsPage.module.css';
import projects from '../../data/projects.json';

// Components
import ProjectsList from '../../components/ProjectsList';
import AddButton from '../../components/AddButton';

export default function ProjectsPage() {
  return (
    <>
      {/* <header>Здесь будет Header</header> */}
      <div className={s.container}>
        <div className={s.headbar}>
          <h1 className={s.title}>Projects</h1>
          <div className={s.btnWrapper}>
            <AddButton />
            <p className={s.btnText}>Create a project</p>
          </div>
        </div>
        <ProjectsList projects={projects} />
      </div>
    </>
  );
}
