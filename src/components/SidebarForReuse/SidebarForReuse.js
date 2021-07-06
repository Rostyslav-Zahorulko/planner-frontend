import ShowBackArrow from '../ShowBackArrow';
import SidebarAddButton from '../SidebarAddButton';
import { useHistory, useLocation } from 'react-router-dom';
// import FormCreateSprint from '../FormCreateSprint';

import styles from './SidebarForReuse.module.css';

//   return (
//     <div className={styles.sidebar}>
//       <ShowBackArrow goBackTo={goBackTo} onClick={handleGoBack} />

const SidebarForReuse = ({ children, text, onOpen, onClick }) => {
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
