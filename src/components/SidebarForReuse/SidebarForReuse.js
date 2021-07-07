import { useSelector } from 'react-redux';
import ShowBackArrow from '../ShowBackArrow';
import SidebarAddButton from '../SidebarAddButton';

import styles from './SidebarForReuse.module.css';

import { currentSprintSelectors } from '../../redux/current-sprint';

const SidebarForReuse = ({ children, text, onOpen, onClick }) => {
  const sprintTitle = useSelector(currentSprintSelectors.getCurrentSprintTitle);

  return (
    <div className={styles.sidebar}>
      <ShowBackArrow text={text} onClick={onClick} />
      {children}
      <SidebarAddButton
        text={`Create a ${text}`}
        onOpen={onOpen}
        onClick={onClick}
      >
        {/* <FormCreateSprint /> */}
      </SidebarAddButton>
    </div>
  );
};
export default SidebarForReuse;
