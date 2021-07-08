import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import FormButtons from '../FormButtons';
import Calendar from '../Calendar/Calendar';

import styles from './FormCreateSprint.module.css';

import { sprintsOperations } from '../../redux/sprints';

const { addSprint } = sprintsOperations;

const FormCreateSprint = ({ onClose, projectId }) => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [prevDaysChoosingDisabled, setPrevDaysChoosingDisabled] =
    useState(false);

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

  const handleCheckboxChange = useCallback(({ target: { checked } }) => {
    setPrevDaysChoosingDisabled(checked);
  }, []);

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();

      const input = document.querySelector(
        '.react-datepicker__input-container > input',
      );

      const sprint = {
        title,
        startDate: input.value,
        duration,
      };

      dispatch(addSprint({ projectId, sprint }));

      setTitle('');
      setDuration('');
      onClose();
    },
    [title, duration, projectId, onClose, dispatch],
  );

  const sprintStartMinDate = prevDaysChoosingDisabled ? new Date() : null;

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

      <label className={styles.label_checkbox}>
        <input
          className={styles.input_checkbox}
          type="checkbox"
          checked={prevDaysChoosingDisabled}
          onChange={handleCheckboxChange}
        />
        Disable / enable past days choosing
      </label>

      <div className={styles.wrapper}>
        <div className={styles.label_picker}>
          <Calendar sprintStartMinDate={sprintStartMinDate} />
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
