import { useState } from 'react';

import СhangeButton from '../СhangeButton';
import СhangeTitleInput from '../ChangeTitleInput';

import styles from './PageTitle.module.css';

export default function PageTitle({ title, onChangeTitle }) {
  const [newTitle, setNewTitle] = useState('');
  const [isInputShown, setIsInputShown] = useState(false);

  const handleChangeBtnClick = () => {
    setIsInputShown(!isInputShown);
  };

  const handleInputChange = e => {
    e.preventDefault();

    setNewTitle(e.target.value);
  };

  const handleTitleChange = () => {
    onChangeTitle(newTitle);
    setNewTitle('');
    setIsInputShown(!isInputShown);
  };

  return (
    <div className={styles.title}>
      {isInputShown ? (
        <СhangeTitleInput
          value={newTitle}
          onChange={e => handleInputChange(e)}
          onBlur={handleTitleChange}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              handleTitleChange();
            }
          }}
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
