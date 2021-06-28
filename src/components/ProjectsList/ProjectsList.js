import s from './ProjectsList.module.css';

import ProjectsListItem from '../ProjectsListItem';

export default function ProjectsList({ projects }) {
  return (
    <ul className={s.list}>
      {projects.map(({ id, title, description }) => (
        <ProjectsListItem key={id} title={title} description={description} />
      ))}
    </ul>
  );
}
