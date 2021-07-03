import ShowBackArrow from '../ShowBackArrow';
import SidebarAddButton from '../SidebarAddButton';
import styles from './SidebarForReuse.module.css';

const SidebarForReuse = ({ children, goBackTo }) => {
  return (
    <div className={styles.sidebar}>
      <ShowBackArrow goBackTo={goBackTo} />
      {children}
      <SidebarAddButton children={'Create a sprint'} />
    </div>
  );
};
export default SidebarForReuse;
