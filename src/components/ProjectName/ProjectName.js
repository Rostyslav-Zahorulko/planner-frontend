import СhangeButton from '../../components/СhangeButton';

import styles from './ProjectName.module.css';

const ProjectName = ({ title, description }) => (
  <>
    <div className={styles.title}>
      <h1 className={styles.project_title}>{title}</h1>
      <СhangeButton type="button" aria-label="Сhange" />
    </div>
    <p className={styles.project_desc}>{description}</p>
  </>
);
export default ProjectName;
