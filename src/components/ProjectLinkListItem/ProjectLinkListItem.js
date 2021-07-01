import styles from './ProjectLinkListItem.module.css';

const ProjectLinkListItem = project => (
  <li className={styles.list_item}>
    <a className={styles.link_list_item} href={`/projects/${project.id}`}>
      <span className={styles.link_list_item_sp}>test1{project.title} </span>
      {/* </NavLink> */}
    </a>
    {/* <NavLink to={`/projects/${id}`}> */}
    {/* </NavLink> */}
  </li>
);
export default ProjectLinkListItem;
