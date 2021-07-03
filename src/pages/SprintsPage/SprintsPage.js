import { useState, useCallback } from 'react'; //, useEffect
import SprintList from '../../components/SprintsList';
import ProjectName from '../../components/ProjectName';
import AddButton from '../../components/AddButton';
import Sidebar from '../../components/Sidebar';
//import ModalDeletesSprint from '../../components/ModalDeletesSprint';
import Modal from '../../components/Modal';
import FormAddPeople from '../../components/FormAddPeople';
import FormCreateSprint from '../../components/FormCreateSprint';
import '../../styles/base.css';
import styles from './SprintsPage.module.css';
// Redux
//import { sprintsOperations } from '../../redux/projects';
//import { projectsSelectors } from '../../redux/projects';
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
  const [showForm, setShowForm] = useState(false);
  const [showAddPeople, setShowAddPeople] = useState(false);
  /*CreateSprint*/
  const toggleModal = useCallback(() => {
    setShowForm(prevValue => !prevValue);
  }, []);
  /*Add people*/
  const toggleModalAddPeople = useCallback(() => {
    setShowAddPeople(prevValue => !prevValue);
  }, []);

  /*const handleCreateSprint = id => {
    setShowForm(true);
  };*/

  return (
    <div className={styles.project}>
      <Sidebar />
      <div className={styles.sprints}>
        <ProjectName />
        <div className={styles.addButtonSprint}>
          <AddButton onClick={toggleModal} />
          <p className={styles.createSprint}>Create a sprint</p>
        </div>

        <h3 className={styles.subject} onClick={toggleModalAddPeople}>
          Add people
        </h3>

        {/*<p cllassName={styles.text}> Ваш проект не має спринтів, скористайтесь кнопкою "Створити спринт"</p>*/}
        <SprintList sprints={sprints} />
        {/*{showModal && <ModalDeletesSprint />}*/}
        {showAddPeople && (
          <Modal title={'Add people'} onClose={toggleModalAddPeople}>
            <FormAddPeople />
          </Modal>
        )}
        {showForm && (
          <Modal title={'Creating a sprint'} onClose={toggleModal}>
            <FormCreateSprint />
          </Modal>
        )}
      </div>
    </div>
  );
};
export default SprintsPage;
