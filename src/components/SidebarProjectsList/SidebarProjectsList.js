import SidebarProjectsListItem from '../SidebarProjectsListItem';
import styles from './SidebarProjectsList.module.css';

const SidebarProjectsList = ({ projects }) => (
  <ul className={styles.link_list}>
    {projects.map(project => (
      <SidebarProjectsListItem key={project.id} project={project} />
    ))}
  </ul>
);

export default SidebarProjectsList;
