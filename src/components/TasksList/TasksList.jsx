import st from './TasksList.module.css';
import TaskItem from '../TaskItem/TaskItem';
// import tasks from '../../data/tasks.json';
import TaskItemCard from '../TaskItemCard/TaskItemCard';
import Media from 'react-media';

const TasksList = ({ tasks }) => {
  return (
    <Media queries={{ big: { minWidth: 1280 } }}>
      {matches =>
        matches.big ? (
          <>
            <ul className={st.task_list}>
              {tasks.map(
                ({ id, title, plannedHours, hoursPerDay, totalHours }) => (
                  <TaskItem
                    key={id}
                    title={title}
                    plannedHours={plannedHours}
                    hoursPerDay={hoursPerDay}
                    totalHours={totalHours}
                  />
                ),
              )}
            </ul>
          </>
        ) : (
          <>
            <ul className={st.task_list}>
              {tasks.map(
                ({ id, title, planHours, hoursPerDay, totalHours }) => (
                  <TaskItemCard
                    key={id}
                    title={title}
                    planHours={planHours}
                    hoursPerDay={hoursPerDay}
                    totalHours={totalHours}
                  />
                ),
              )}
            </ul>
          </>
        )
      }
    </Media>
  );
};

export default TasksList;
