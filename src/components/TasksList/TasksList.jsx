import st from './TasksList.module.css';
import TaskItem from '../TaskItem/TaskItem';
import tasks from '../../data/tasks.json';

const TasksList = () => {
  return (
    <ul className={st.task_list}>
      {tasks.map(({ id, title, planHours, hoursPerDay, totalHours }) => (
        <TaskItem
          key={id}
          title={title}
          planHours={planHours}
          hoursPerDay={hoursPerDay}
          totalHours={totalHours}
        />
      ))}
    </ul>
  );
};

export default TasksList;
