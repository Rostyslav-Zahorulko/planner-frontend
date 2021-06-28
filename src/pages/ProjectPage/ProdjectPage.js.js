import SprintList from '../../components/Sprints/SprintsList';
import '../../styles/base.css';
import AddIconButton from '../../components/Button/AddIconButton';
import СhangeButton from '../../components/Button/СhangeButton';
import { ReactComponent as AddIcon } from '../../components/icons/add.svg';
import styles from './Porodject.module.css';
const prodjects = [
  {
    id: '1asdfg',
    title: 'string1',
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
];
const Prodject = () => {
  return (
    <div className={styles.porodject}>
      <div className={styles.porodject_tital}>
        <h1 className={styles.tital}> Project1</h1>
        <СhangeButton
          type="button"
          // onClick={}
          aria-label="Сhange"
        />
      </div>
      <p className={styles.porodject_desc}>
        Short description of the project, if it exist, it is posted here. The
        width of the text block
      </p>
      <h3
        className={styles.subject}
        //onClick={}
      >
        Add people
      </h3>

      <AddIconButton
        type="button"
        // onClick={}
        aria-label="add"
      >
        <AddIcon width="44" hanging="44" fill="#fff" />
      </AddIconButton>

      {/*<p cllassName={styles.text}> Ваш проект не має спринтів, скористайтесь кнопкою "Створити спринт"</p>*/}

      <SprintList sprints={prodjects} />
    </div>
  );
};
export default Prodject;

/*{
  title: string,
  description: string,
  team: [{type: Schema.Types.ObjectId, ref: 'User'}, {...}, ...]
  sprints: [ 
  {title: string,
  startDate: Date,
  expirationDate: Date,
  duration: number,
  tasks: [
  {title: string,
  plannedHours: number,
  totalHours: number,
  hoursPerDay: [{dayIndex: hours},{dayIndex: hours}, {...}, ...]
  },
  {...}, ...]
  },
  {...}, ...]
  }
  */
