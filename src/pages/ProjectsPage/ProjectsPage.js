// import React, { Component } from 'react';
import React, { useState, useCallback, useEffect } from 'react';
import s from './ProjectsPage.module.css';
import projects from '../../data/projects.json';

// Components
// import AppBar from '../../components/AppBar';
import ProjectsList from '../../components/ProjectsList';
import AddButton from '../../components/AddButton';
import CreateProjectModal from '../../components/CreateProjectModal';

export default function ProjectsPage({ children }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

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

// export default ProjectsPage;
