import AddButton from '../AddButton';
import styles from './SidebarAddButton.module.css';
const SidebarAddButton = ({children}) => {
  return (
    <div className={styles.sidebar_add_button}>
      <AddButton />
      <p className={styles.create_project_text}>{children}</p>
    </div>
  );
};
export default SidebarAddButton;
