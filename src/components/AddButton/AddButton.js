import s from './AddButton.module.css';
import { ReactComponent as PlusIcon } from '../../images/plus-icon.svg';

export default function AddButton({ createModal }) {
  return (
    <button className={s.btn} onClick={createModal} type="button">
      <PlusIcon className={s.icon} />
    </button>
  );
}