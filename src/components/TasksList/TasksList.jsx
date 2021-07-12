import st from './TasksList.module.css';
import TaskItem from '../TaskItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//import TaskItemCard from '../TaskItemCard';
//import Media from 'react-media';

const TasksList = ({ visibleTasks, projectId, sprintId }) => {
  return (
    <TransitionGroup component="ul" className={st.task_list}>
      {visibleTasks.map(({ id, title, plannedHours, totalHours }) => (
        <CSSTransition
          className={st.task}
          timeout={800}
          mountOnEnter
          unmountOnExit
          key={id}
        >
          <TaskItem
            title={title}
            plannedHours={plannedHours}
            totalHours={totalHours}
            projectId={projectId}
            sprintId={sprintId}
            taskId={id}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TasksList;
