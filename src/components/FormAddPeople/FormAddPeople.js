import EmailPeopleList from '../EmailPeopleList';

import styles from './FormAddPeople.module.css';
//Enter e-mail
const FormAddPeople = () => {
  return (
    <div className={styles.wrap}>
      <label className={styles.label}>
        <input className={styles.input} placeholder=" " />
        <span className={styles.headline}>The name of the sprint</span>
      </label>
      <p>Added users:</p>
      {/* если нет списка, тогда текст <p>*/}
      <EmailPeopleList />
      <p>You have not added any users yet</p>
    </div>
  );
};
export default FormAddPeople;
