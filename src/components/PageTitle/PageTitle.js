import { useState } from 'react';

import СhangeButton from '../СhangeButton';
import СhangeTitleInput from '../ChangeTitleInput';

import styles from './PageTitle.module.css';

export default function PageTitle({ title, onChangeTitle }) {
  const [newTitle, setNewTitle] = useState(title);
  const [isInputShown, setIsInputShown] = useState(false);

  const handleChangeBtnClick = () => {
    setIsInputShown(!isInputShown);
    onChangeTitle(newTitle);
    setNewTitle(title);
  };

  const handleInputChange = e => {
    e.preventDefault();
    setNewTitle(e.target.value);
  };

  return (
    <div className={styles.title}>
      {isInputShown ? (
        <СhangeTitleInput
          value={newTitle}
          onChange={e => handleInputChange(e)}
          onBlur={e => handleChangeBtnClick(e)}
        />
      ) : (
        <h1 className={styles.project_title}>{title}</h1>
      )}

      <СhangeButton
        type="button"
        aria-label="Сhange"
        onClick={handleChangeBtnClick}
      />
    </div>
  );
}
