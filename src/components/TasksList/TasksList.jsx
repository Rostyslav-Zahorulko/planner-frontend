import st from './TasksList.module.css';
import TaskItem from '../TaskItem';
import TaskItemCard from '../TaskItemCard';
import Media from 'react-media';

const TasksList = ({ visibleTasks, projectId, sprintId }) => {
  return (
    <Media queries={{ big: { minWidth: 1280 } }}>
      {matches =>
        matches.big ? (
          <>
            <ul className={st.task_list}>
              {visibleTasks.map(({ id, title, plannedHours, totalHours }) => (
                <TaskItem
                  key={id}
                  title={title}
                  plannedHours={plannedHours}
                  totalHours={totalHours}
                  projectId={projectId}
                  sprintId={sprintId}
                  taskId={id}
                />
              ))}
            </ul>
          </>
        ) : (
          <>
            <ul className={st.task_list}>
              {visibleTasks.map(
                ({ id, title, plannedHours, hoursPerDay, totalHours }) => (
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
