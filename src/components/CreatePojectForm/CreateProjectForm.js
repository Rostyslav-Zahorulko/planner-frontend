import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import FormButtons from '../FormButtons';

import styles from './CreateProjectForm.module.css';

import { projectsOperations } from '../../redux/projects';

const { addProject } = projectsOperations;

const CreateProjectForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'description':
        setDescription(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();

      const project = {
        title,
        description,
      };

      // console.log(project);

      dispatch(addProject(project));

      setTitle('');
      setDescription('');
      onClose();
    },
    [title, description, onClose, dispatch],
  );

  return (
    <form
      className={styles.ProjectForm}
      autoComplete="off"
      onSubmit={handleFormSubmit}
    >
      <div className={styles.FormField}>
        <input
          className={styles.FormInput}
          type="text"
          name="title"
          value={title}
          required
          placeholder=" "
          onChange={handleInputChange}
        />
        <label className={styles.FormLable}>Project name</label>
      </div>

      <div className={styles.FormField}>
        <input
          className={styles.FormInput}
          type="text"
          name="description"
          value={description}
          required
          placeholder=" "
          onChange={handleInputChange}
        />
        <label className={styles.FormLable}>Description</label>
      </div>

      <FormButtons onClose={onClose} />
    </form>
  );
};

export default CreateProjectForm;
