import styles from './SidebarProjectsListItem.module.css';
import { NavLink } from 'react-router-dom';

const SidebarProjectsListItem = ({ project }) => (
  <li className={styles.list_item}>
    <NavLink
      className={styles.link_list_item}
      to={`/projects/${project.id}`}
      activeClassName={styles.link_active}
    >
      <span className={styles.link_list_item_sp}>{project.title} </span>
    </NavLink>
  </li>
);
export default SidebarProjectsListItem;
