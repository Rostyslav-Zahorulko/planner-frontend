import styles from './EmailPeopleListItem.module.css';

const EmailPeopleListItem = user => (
  <li className={styles.email_list}>
    <a className={styles.userEmail} href={`/projects/${user.email}`}>
      <span className={styles.link_list_item_sp}>{user.email} </span>
    </a>
  </li>
);
export default EmailPeopleListItem;
