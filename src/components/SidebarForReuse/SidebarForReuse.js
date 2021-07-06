import ShowBackArrow from '../ShowBackArrow';
import SidebarAddButton from '../SidebarAddButton';
// import FormCreateSprint from '../FormCreateSprint';

import styles from './SidebarForReuse.module.css';

const SidebarForReuse = ({ children, text, onOpen }) => {
  return (
    <div className={styles.sidebar}>
      <ShowBackArrow text={text} />
      {children}
      <SidebarAddButton text={`Create a ${text}`} onOpen={onOpen}>
        {/* <FormCreateSprint /> */}
      </SidebarAddButton>
    </div>
  );
};
export default SidebarForReuse;
