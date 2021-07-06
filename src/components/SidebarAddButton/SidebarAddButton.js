import AddButton from '../AddButton';
import styles from './SidebarAddButton.module.css';
const SidebarAddButton = ({ text, onOpen }) => {
  return (
    <div className={styles.sidebar_add_button}>
      <AddButton onOpen={onOpen} />
      <p className={styles.create_project_text}>{text}</p>
    </div>
  );
};
export default SidebarAddButton;
