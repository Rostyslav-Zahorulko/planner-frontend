import SprintLinkListItem from '../SprintLinkListItem';
import styles from './SprintLinkList.module.css';
const SprintLinkList = ({ sprints }) => (
  <ul className={styles.link_list}>
    {sprints.map(sprint => (
      <SprintLinkListItem key={sprint.id} sprints={sprints} sprint={sprint} />
    ))}
  </ul>
);
export default SprintLinkList;
