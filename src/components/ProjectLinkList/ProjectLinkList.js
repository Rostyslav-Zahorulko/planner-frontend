import ProjectLinkListItem from '../ProjectLinkListItem';
import styles from './ProjectLinkList.module.css';
const ProjectLinkList = ({ projects }) => (
  <ul className={styles.link_list}>
    {projects.map(project => (
      <ProjectLinkListItem key={project.id} project={project} />
    ))}
  </ul>
);

export default ProjectLinkList;
/*export default function ProjectsList({ projects }) {
  const cropDescription = description => {
    if (description.length > 42) {
      const croppedDescription = `${description.substr(0, 38)}...`;
      return croppedDescription;
    }
    return description;
  };

  return (
    <ul className={s.list}>
      {projects.map(({ id, title, description }) => (
        <ProjectsListItem
          key={id}
          title={title}
          description={cropDescription(description)}
        />
      ))}
    </ul>
  );
} */
