import ShowProjects from '../ShowProjects';
import ProjectLink from '../ProjectLinkList';
import SidebarAddButton from '../SidebarAddButton';
import projects from '../../data/projects.json';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ShowProjects />
      <ProjectLink projects={projects} />
      <SidebarAddButton children={'Create a project'} />
    </div>
  );
};
export default Sidebar;
