import { useState } from 'react';
import EmailPeopleList from '../EmailPeopleList';

import styles from './FormAddPeople.module.css';

/*const users = [
  {
    id: '1asdfg',
    email: 'fgghjk@kjlk.kjj',
  },
  {
    id: '1asdgrhf',
    email: 'fgghjk@koi.hkd',
  },
];*/
//Enter e-mail
const FormAddPeople = ({ onSubmit, users }) => {
  const [email, setEmail] = useState('');
  const handleInputChange = e => setEmail(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      email,
      isDone: false,
    };
    // console.log('user:', newUser);
    onSubmit(newUser);
    setEmail('');
  };

  //onSubmit={handleSubmit} users={users}
  return (
    <form className={styles.wrap} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <input
          className={styles.input}
          onChange={handleInputChange}
          value={email}
          placeholder=" "
          type="email"
          name="mail"
          required
        />
        <span className={styles.headline}>The name of the sprint</span>
      </label>
      <p>Added users:</p>
      <EmailPeopleList users={users} />
    </form>
  );
};

export default FormAddPeople;
