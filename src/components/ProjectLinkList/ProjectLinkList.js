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
