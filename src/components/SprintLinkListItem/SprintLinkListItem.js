import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';

import styles from './SprintLinkListItem.module.css';

export default function SprintLinkListItem({ sprint }) {
  const { projectId } = useParams();
  const { title, id } = sprint;

  return (
    <li className={styles.list_item}>
      <NavLink
        to={`/projects/${projectId}/${id}`}
        className={styles.link}
        activeClassName={styles.link_active}
      >
        <span className={styles.link_list_item_sp}>{title}</span>
      </NavLink>
    </li>
  );
}
