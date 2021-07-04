import ShowBackArrow from '../ShowBackArrow';
import SidebarAddButton from '../SidebarAddButton';
// import FormCreateSprint from '../FormCreateSprint';

import styles from './SidebarForReuse.module.css';

const SidebarForReuse = ({ children, goBackTo }) => {
  return (
    <div className={styles.sidebar}>
      <ShowBackArrow goBackTo={goBackTo} />
      {children}
      <SidebarAddButton children={'Create a sprint'}>
        {/* <FormCreateSprint /> */}
      </SidebarAddButton>
    </div>
  );
};
export default SidebarForReuse;
