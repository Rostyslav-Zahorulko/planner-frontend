import { ReactComponent as PlusIcon } from '../../images/plus-icon.svg';

import s from './AddButton.module.css';

export default function AddButton({ onOpen }) {
  return (
    <button type="button" className={s.btn} onClick={onOpen}>
      <PlusIcon />
    </button>
  );
}
