import { NavLink } from 'react-router-dom';

import styles from './SidebarProjectsListItem.module.css';

const SidebarProjectsListItem = ({ project }) => (
  <li className={styles.list_item}>
    <NavLink
      to={`/projects/${project.id}`}
      className={styles.link_list_item}
      activeClassName={styles.link_active}
    >
      <span className={styles.link_list_item_sp}>{project.title}</span>
    </NavLink>
  </li>
);

export default SidebarProjectsListItem;
