import EmailPeopleListItem from '../EmailPeopleListItem';
import styles from './EmailPeopleList.module.css';

const EmailPeopleList = ({ users }) => (
  <ul className={styles.email_list}>
    {users.map(user => (
      <EmailPeopleListItem key={user.id} user={user} />
    ))}
  </ul>
);

export default EmailPeopleList;
