import styles from './SprintLinkListItem.module.css';

const SprintLinkListItem = (project, sprint) => (
  <li className={styles.list_item}>
    <a
      className={styles.link_list_item}
      href={`/projects/${project.id}/${sprint.id}`}
    >
      <span className={styles.link_list_item_sp}>sprint1{sprint.title} </span>
      {/* </NavLink> */}
    </a>
    {/* <NavLink to={`/projects/${id}`}> */}
    {/* </NavLink> */}
  </li>
);
export default SprintLinkListItem;
