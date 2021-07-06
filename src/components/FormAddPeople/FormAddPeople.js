import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import EmailPeopleList from '../EmailPeopleList';
import FormButtons from '../FormButtons';

import styles from './FormAddPeople.module.css';

import { projectsOperations } from '../../redux/projects';

const { addUser } = projectsOperations;

const FormAddPeople = ({ onClose, users }) => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const handleFormSubmit = useCallback(
    e => {
      e.preventDefault();

      const user = { email };

      console.log(user);

      dispatch(addUser(user));

      setEmail('');

      onClose();
    },
    [email, onClose, dispatch],
  );

  return (
    <form className={styles.wrap} onSubmit={handleFormSubmit}>
      <label className={styles.label}>
        <input
          className={styles.input}
          placeholder=" "
          onChange={handleInputChange}
          value={email}
          type="email"
          name="email"
          required
        />
        <span className={styles.headline}>Enter e-mail</span>
      </label>
      <p className={styles.text}>Added users:</p>
      <EmailPeopleList users={users} />
      {/* {users.length > 0 ? (
        <EmailPeopleList users={users} />
      ) : (
        <div>You have no users yet</div>
      )} */}
      <FormButtons onClose={onClose} />
    </form>
  );
};

export default FormAddPeople;
