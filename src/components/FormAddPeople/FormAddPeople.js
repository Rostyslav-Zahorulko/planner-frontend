import { useState, useCallback } from 'react';
//import { useDispatch } from 'react-redux';

import EmailPeopleList from '../EmailPeopleList';
import FormButtons from '../FormButtons';

import styles from './FormAddPeople.module.css';
//Enter e-mail
const FormAddPeople = ({ onClose, users }) => {
  const [email, setEmail] = useState('');

  //const dispatch = useDispatch();

  const handleInputChange = e => setEmail(e.target.value);
  const handleFormSubmit = useCallback(e => {
    e.preventDefault();

    const user = { email };

    // dispatch(getUserEmail({ users, email }));
  });
  return (
    <form className={styles.wrap} onSubmit={handleFormSubmit}>
      <label className={styles.label}>
        <input
          className={styles.input}
          placeholder=" "
          onChange={handleInputChange}
          value={email}
          type="email"
          name="mail"
          required
        />
        <span className={styles.headline}>The name of the sprint</span>
      </label>
      <p>Added users:</p>
      <EmailPeopleList users={users} />
      <FormButtons onClose={onClose} />
    </form>
  );
};
export default FormAddPeople;
