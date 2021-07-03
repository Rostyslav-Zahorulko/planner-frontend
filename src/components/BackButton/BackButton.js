import { ReactComponent as ArrowIcon } from '../../images/arrow.svg';
import styles from './BackButton.module.css';

export default function BackButton({ onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <ArrowIcon />
    </button>
  );
}
