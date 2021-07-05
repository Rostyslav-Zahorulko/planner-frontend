import s from './AddButton.module.css';
import { ReactComponent as PlusIcon } from '../../images/plus-icon.svg';

export default function AddButton({ onOpen }) {
  return (
    <button type="button" className={s.btn} onClick={onOpen}>
      <PlusIcon className={s.icon} />
    </button>
  );
}
