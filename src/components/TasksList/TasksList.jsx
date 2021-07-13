import TaskItem from '../TaskItem';

import st from './TasksList.module.css';

const TaskList = ({ visibleTasks, projectId, sprintId }) =>
    (<ul className={st.task_list}>
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
    </ul>)

export default TaskList;
