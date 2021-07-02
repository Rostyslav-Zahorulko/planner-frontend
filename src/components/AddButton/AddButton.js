import s from './AddButton.module.css';
import { ReactComponent as PlusIcon } from '../../images/plus-icon.svg';

export default function AddButton({ onClick }) {
  return (
    <button type="button" className={s.btn} onClick={onClick}>
      <PlusIcon className={s.icon} />
    </button>
  );
}
