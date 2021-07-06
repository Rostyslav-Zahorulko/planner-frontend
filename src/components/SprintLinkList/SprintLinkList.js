import { useSelector } from 'react-redux';

import SprintLinkListItem from '../SprintLinkListItem';
import styles from './SprintLinkList.module.css';

import { sprintsSelectors } from '../../redux/sprints';

export default function SprintLinkList() {
  const sprints = useSelector(sprintsSelectors.getSprintsItems);
  console.log(sprints);

  return (
    <ul className={styles.link_list}>
      {sprints.map(sprint => (
        <SprintLinkListItem key={sprint.id} sprint={sprint} />
      ))}
    </ul>
  );
}
