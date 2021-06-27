import s from './ProjectsList.module.css';

import ProjectsListItem from '../ProjectsListItem';

export default function ProjectsList({ projects }) {
  return (
    <ul className={s.list}>
      {projects.length > 0
        ? projects.map(({ id, title, description }) => (
            <ProjectsListItem id={id} title={title} description={description} />
          ))
        : 'No projects added yet'}
    </ul>
  );
}
