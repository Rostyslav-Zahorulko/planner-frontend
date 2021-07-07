import SprintLinkListItem from '../SprintLinkListItem';
import styles from './SprintLinkList.module.css';

export default function SprintLinkList({ sprints }) {
  return (
    <ul className={styles.link_list}>
      {sprints.map(sprint => (
        <SprintLinkListItem key={sprint.id} sprint={sprint} />
      ))}
    </ul>
  );
}
