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
  // const [startDate, setStartDate] = useState('');
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

      // const labelPicker = document.querySelector(
      //   '.react-datepicker-ignore-onclickoutside',
      // );

      // console.dir(labelPicker);
      // console.log(labelPicker);

      // setStartDate(labelPicker.value);

      const sprint = {
        title,
        startDate: '2021-07-04',
        duration,
      };

      dispatch(addSprint({ projectId, sprint }));

      setTitle('');
      // setStartDate('');
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
