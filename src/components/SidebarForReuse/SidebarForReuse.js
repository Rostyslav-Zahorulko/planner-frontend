import ShowBackArrow from '../ShowBackArrow';
import SidebarAddButton from '../SidebarAddButton';

import styles from './SidebarForReuse.module.css';

const SidebarForReuse = ({ children, text, onOpen, onClick }) => {
  return (
    <div className={styles.sidebar}>
      <ShowBackArrow text={text} onClick={onClick} />
      {children}
      <SidebarAddButton
        text={`Create a ${text}`}
        onOpen={onOpen}
        onClick={onClick}
      ></SidebarAddButton>
    </div>
  );
};

export default SidebarForReuse;
