import СhangeButton from '../../components/СhangeButton';
import styles from './ProjectName.module.css';

const ProjectName = () => (
  <>
    <div className={styles.title}>
      <h1 className={styles.project_title}> Project1</h1>
      <СhangeButton
        type="button"
        // onClick={}
        aria-label="Сhange"
      />
    </div>
    <p className={styles.project_desc}>
      Short description of the project, if it exist, it is posted here. The
      width of the text block
    </p>
  </>
);
export default ProjectName;
