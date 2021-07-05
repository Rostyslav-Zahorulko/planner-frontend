import { useSelector } from 'react-redux';
import СhangeButton from '../../components/СhangeButton';
import styles from './ProjectName.module.css';

//Redux
import { currentProjectSelectors } from '../../redux/current-project';
const { getCurrentProjectTitle, getCurrentProjectDescription } =
  currentProjectSelectors;

const ProjectName = () => (
  <>
    <div className={styles.title}>
      <h1 className={styles.project_title}>
        {useSelector(getCurrentProjectTitle)}
      </h1>
      <СhangeButton
        type="button"
        // onClick={}
        aria-label="Сhange"
      />
    </div>
    <p className={styles.project_desc}>
      {useSelector(getCurrentProjectDescription)}
    </p>
  </>
);
export default ProjectName;
