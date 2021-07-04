import { NavLink } from 'react-router-dom';

import styles from './SprintLinkListItem.module.css';

const SprintLinkListItem = ({ project, sprint }) => (
  <li className={styles.list_item}>
    {/* в to надо вставить `/projects/${project.id}/${sprint.id}`*/}
    <NavLink
      to={`/projects/`}
      // activeStyle={{
      //   fontWeight: 'bold',
      // }}
    >
      <span className={styles.link_list_item_sp}>{sprint.title} </span>
    </NavLink>
  </li>
);
export default SprintLinkListItem;
