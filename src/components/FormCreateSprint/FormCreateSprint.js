import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import FormButtons from '../FormButtons';
import Calendar from '../Calendar/Calendar';

import styles from './FormCreateSprint.module.css';

import { sprintsOperations } from '../../redux/sprints';
import {} from '../../redux/current-project';

const { addSprint } = sprintsOperations;

const FormCreateSprint = ({ onClose, projectId }) => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'duration':
        setDuration(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();

      const input = document.querySelector(
        '.react-datepicker__input-container > input',
      );

      // console.log(input.value);

      const sprint = {
        title,
        startDate: input.value,
        duration,
      };

      // console.log(sprint);

      dispatch(addSprint({ projectId, sprint }));

      setTitle('');
      setDuration(false);
      onClose();
    },
    [title, duration, projectId, onClose, dispatch],
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
        <span className={styles.headline}>The name of the sprint</span>
      </label>

      <div className={styles.inner_radio}>
        <label className={styles.label_radio}>
          <input
            className={styles.input_radio}
            type="radio"
            checked="prev-date"
            value="prev-date"
            // readOnly
          />
          <span className={styles.headline_radio}>Previous days</span>
        </label>
      </div>
      <div className={styles.inner}>
        <div className={styles.label_picker}>
          <Calendar />
        </div>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="number"
            name="duration"
            value={duration}
            required
            placeholder=" "
            min="5"
            max="30"
            onChange={handleInputChange}
          />
          <span className={styles.headline}>Duration</span>
        </label>
      </div>
      <FormButtons onClose={onClose} />
    </form>
  );
};

export default FormCreateSprint;
