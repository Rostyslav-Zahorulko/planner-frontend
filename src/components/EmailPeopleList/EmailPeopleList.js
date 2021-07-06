import EmailPeopleListItem from '../EmailPeopleListItem';
import styles from './EmailPeopleList.module.css';

const EmailPeopleList = ({ users }) => (
  <ul className={styles.email_list}>
    {users.map((user, idx) => (
      <EmailPeopleListItem key={idx} user={user} />
    ))}
  </ul>
);

export default EmailPeopleList;
