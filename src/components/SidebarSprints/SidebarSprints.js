import ShowProjects from '../ShowProjects';
import SprintLinkList from '../SprintLinkList/SprintLinkList';
import SidebarAddButton from '../SidebarAddButton';
import sprints from '../../data/sprints.json';
import styles from './Sidebar.module.css';

const SidebarSprints = () => {
  return (
    <div className={styles.sidebar}>
      <ShowProjects />
      <SprintLinkList sprints={sprints} />
      <SidebarAddButton children={'Create a sprint'} />
    </div>
  );
};
export default SidebarSprints;
