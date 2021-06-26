import React from 'react';

import ProjectsList from '../../components/ProjectsList';
import AddButton from '../../components/AddButton';

export default function ProjectsPage() {
  return (
    <>
      <header>Здесь будет Header</header>
      <h1>Projects</h1>
      <ProjectsList />
      <AddButton />
    </>
  );
}
