import styles from './FormCreateTask.module.css';
import tasksOperations from '../../redux/tasks/tasks-operations';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

const FormCreateTask = ({ projectId, sprintId }) => {
  const [task, setTask] = useState('');
  const [hours, setHours] = useState('');

  const dispatch = useDispatch();

  const handleChangeTask = e => {
    setTask(e.target.value);
  };

  const handleChangeHours = e => {
    setHours(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      tasksOperations.addTask(projectId, sprintId, {
        task,
        scheduledTime: hours,
      }),
    );
    setTask('');
    setHours('');
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Creating a task</h2>
      <form className={styles.input_modal} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <input
            id={task}
            value={task}
            className={styles.input}
            placeholder="Task name"
            onChange={handleChangeTask}
          />
        </label>
        <label className={styles.label}>
          <input
            id={hours}
            value={hours}
            className={styles.input}
            placeholder="Scheduled hours"
            onChange={handleChangeHours}
          />
        </label>
      </form>
    </div>
  );
};

export default FormCreateTask;
