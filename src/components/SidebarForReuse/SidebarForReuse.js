import ShowBackArrow from '../ShowBackArrow';
import SidebarAddButton from '../SidebarAddButton';
import { useHistory, useLocation } from 'react-router-dom';
// import FormCreateSprint from '../FormCreateSprint';

import styles from './SidebarForReuse.module.css';

const SidebarForReuse = ({ children, goBackTo }) => {
  const history = useHistory();
  const location = useLocation();

  const handleGoBack = () => {
    history.push(location?.state?.from?.location ?? '/projects/sprints');
  };

  return (
    <div className={styles.sidebar}>
      <ShowBackArrow goBackTo={goBackTo} onClick={handleGoBack} />
      {children}
      <SidebarAddButton children={'Create a sprint'}>
        {/* <FormCreateSprint /> */}
      </SidebarAddButton>
    </div>
  );
};
export default SidebarForReuse;
