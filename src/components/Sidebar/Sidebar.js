import BackButton from '../BackButton';
import AddButton from '../AddButton';
import styles from './Sidebar.module.css';

const Sidebar = ({ text, children, onOpen }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <BackButton className={styles.backBtn} />
        <p className={styles.text}>Show {text.concat('s')}</p>
      </div>

      {children}

      <div className={styles.container}>
        <AddButton onOpen={onOpen} />
        <p className={styles.text}>Create a {text}</p>
      </div>
    </div>
  );
};

export default Sidebar;
