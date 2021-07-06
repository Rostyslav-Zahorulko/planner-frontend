import styles from './EmailPeopleListItem.module.css';

const EmailPeopleListItem = user => (
  <li className={styles.email_list}>
    <p className={styles.link_list_item_sp}>{user.email}</p>
  </li>
);

export default EmailPeopleListItem;
