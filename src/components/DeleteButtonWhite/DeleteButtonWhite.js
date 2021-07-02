import s from './DeleteButtonWhite.module.css';
// import { ReactComponent as BasketIcon } from '../icons/basket.svg';

export default function DeleteButtonWhite({ projectId, onDeleteProject }) {
  return (
    <button
      type="button"
      className={s.btn}
      onClick={() => onDeleteProject(projectId)}
    ></button>
  );
}
