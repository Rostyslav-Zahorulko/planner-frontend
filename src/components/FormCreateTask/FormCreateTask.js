import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import FormButtons from '../FormButtons';

import styles from './FormCreateTask.module.css';

import { tasksOperations } from '../../redux/tasks';

const { addTask } = tasksOperations;

const FormCreateTask = ({ projectId, sprintId, onClose }) => {
  const [title, setTitle] = useState('');
  const [plannedHours, setPlannedHours] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'plannedHours':
        setPlannedHours(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();

      const task = { title, plannedHours };

      dispatch(addTask({ projectId, sprintId, task }));

      setTitle('');
      setPlannedHours('');

      onClose();
    },
    [title, plannedHours, projectId, sprintId, onClose, dispatch],
  );

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={title}
          required
          placeholder=" "
          onChange={handleInputChange}
        />
        <span className={styles.headline}>Task name</span>
      </label>

      <label className={styles.label}>
        <input
          className={styles.input}
          type="number"
          name="plannedHours"
          value={plannedHours}
          required
          placeholder=" "
          min="1"
          onChange={handleInputChange}
        />
        <span className={styles.headline}>Sheduled hours</span>
      </label>
      <FormButtons onClose={onClose} />
    </form>
  );
};

export default FormCreateTask;
