import BackButton from '../BackButton';
import AddButton from '../AddButton';
import styles from './Sidebar.module.css';

import { useHistory, useLocation } from 'react-router-dom';

const Sidebar = ({ text, children, onOpen }) => {
  const history = useHistory();
  const location = useLocation();

  const handleGoBack = () => {
    history.push(location?.state?.from?.location ?? '/');
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <BackButton className={styles.backBtn} onClick={handleGoBack} />
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
