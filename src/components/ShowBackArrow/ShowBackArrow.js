import styles from './ShowBackArrow.module.css';

const ShowBackArrow = ({ goBackTo }) => (
  <p className={styles.show_back}>Show {goBackTo}</p>
);
export default ShowBackArrow;
