import EmailPeopleListItem from '../ProjectLinkListItem';
import styles from './EmailPeopleList.module.css';

const EmailPeopleList = () => {
  return (
    <ul className={styles.email_list}>
      <EmailPeopleListItem />
    </ul>
  );
};

export default EmailPeopleList;
