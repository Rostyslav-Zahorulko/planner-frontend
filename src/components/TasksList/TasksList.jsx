import st from './TasksList.module.css';
import TaskItem from '../TaskItem';
//import TaskItemCard from '../TaskItemCard';
//import Media from 'react-media';

const TasksList = ({ visibleTasks, projectId, sprintId }) => {
  return (   
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
  );
};

export default TasksList;
