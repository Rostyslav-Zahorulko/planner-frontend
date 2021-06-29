import s from './AddButton.module.css';
import { ReactComponent as PlusIcon } from '../../images/plus-icon.svg';

export default function AddButton() {
  return (
    <button className={s.btn}>
      <PlusIcon className={s.icon} />
    </button>
  );
}
