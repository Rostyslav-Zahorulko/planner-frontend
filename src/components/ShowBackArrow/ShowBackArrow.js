import PropTypes from 'prop-types';
import styles from './ShowBackArrow.module.css';

// const ShowBackArrow = ({ goBackTo }) => (
//   <p className={styles.show_back}>Show {goBackTo}</p>
// );

const ShowBackArrow = ({ goBackTo, onClick, status = false }) => (
  <button
    type="button"
    className={styles.show_back}
    onClick={onClick}
    disabled={status}
  >
    <p className={styles.text}>Show {goBackTo}</p>
  </button>
);
export default ShowBackArrow;

ShowBackArrow.propTypes = {
  onClick: PropTypes.func,
  status: PropTypes.bool,
};
