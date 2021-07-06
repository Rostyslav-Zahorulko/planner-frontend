import PropTypes from 'prop-types';
import styles from './ShowBackArrow.module.css';

const ShowBackArrow = ({ text, onClick, status = false }) => (
  <button
    type="button"
    className={styles.show_back}
    onClick={onClick}
    disabled={status}
  >
    <p className={styles.text}>Show {text.concat('s')}</p>
  </button>
);
export default ShowBackArrow;

ShowBackArrow.propTypes = {
  onClick: PropTypes.func,
  status: PropTypes.bool,
};
