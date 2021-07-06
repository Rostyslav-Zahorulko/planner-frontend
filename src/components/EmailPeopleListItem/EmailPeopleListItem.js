import styles from './EmailPeopleListItem.module.css';

const EmailPeopleListItem = ({ user }) => (
  <li className={styles.email_list_item}>{user.email}</li>
);

export default EmailPeopleListItem;
