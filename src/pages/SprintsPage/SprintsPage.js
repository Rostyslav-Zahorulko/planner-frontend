import SprintList from '../../components/SprintsList';
import ProjectName from '../../components/ProjectName';
import AddButton from '../../components/AddButton';

import Sidebar from '../../components/Sidebar';
import ModalCreateSprint from '../../components/ModalCreateSprint';
import '../../styles/base.css';
import styles from './SprintsPage.module.css';

const sprints = [
  {
    id: '1asdfg',
    title: 'string1 много слов очень много!',
    startDate: '24 June',
    duration: 33,
  },
  {
    id: '1sdfghj',
    title: 'string2',
    startDate: '24 June',
    duration: 4,
  },
  {
    id: '1dfghvbm',
    title: 'string3',
    startDate: '24 June',
    duration: 5,
  },
  {
    id: 'fgfgggzs',
    title: 'string4',
    startDate: '24 June',
    duration: 5,
  },
];
const SprintsPage = () => {
  return (
    <div className={styles.project}>
      <Sidebar />
      <div className={styles.sprints}>
        <ProjectName />
        <div className={styles.addButtonSprint}>
          <AddButton />
          <p className={styles.createSprint}>Create a sprint</p>
        </div>

        <h3
          className={styles.subject}
          //onClick={}
        >
          Add people
        </h3>

        {/*<p cllassName={styles.text}> Ваш проект не має спринтів, скористайтесь кнопкою "Створити спринт"</p>*/}
        <SprintList sprints={sprints} />
      </div>
    </div>
  );
};
export default SprintsPage;
