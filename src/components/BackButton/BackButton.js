import { ReactComponent as ArrowIcon } from '../../images/arrow.svg';
import PropTypes from 'prop-types';
import styles from './BackButton.module.css';

export default function BackButton({ onClick, status = false }) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={status}
    >
      <ArrowIcon />
    </button>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func,
  status: PropTypes.bool,
};
