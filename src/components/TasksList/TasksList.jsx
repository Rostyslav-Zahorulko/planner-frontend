import st from './TasksList.module.css';
import TaskItem from '../TaskItem/TaskItem';
import TaskItemCard from '../TaskItemCard/TaskItemCard';
import Media from 'react-media';
import { getVisibleTasks } from '../../redux/tasks/tasks-selectors';
import { useSelector } from 'react-redux';

const TasksList = () => {
  const visibleTasks = useSelector(getVisibleTasks);

const TasksList = ({ tasks, projectId, sprintId }) => {
  return (
    <Media queries={{ big: { minWidth: 1280 } }}>
      {matches =>
        matches.big ? (
          <>
            <ul className={st.task_list}>
              {visibleTasks.map(
                ({ id, title, plannedHours, hoursPerDay, totalHours }) => (
                  <TaskItem
                    key={id}
                    title={title}
                    plannedHours={plannedHours}
                    hoursPerDay={hoursPerDay}
                    totalHours={totalHours}
                    projectId={projectId}
                    sprintId={sprintId}
                    taskId={id}
                  />
                ),
              )}
            </ul>
          </>
        ) : (
          <>
            <ul className={st.task_list}>
              {visibleTasks.map(
                ({ id, title, planHours, hoursPerDay, totalHours }) => (
                  <TaskItemCard
                    key={id}
                    title={title}
                    plannedHours={plannedHours}
                    hoursPerDay={hoursPerDay}
                    totalHours={totalHours}
                    projectId={projectId}
                    sprintId={sprintId}
                    taskId={id}
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
