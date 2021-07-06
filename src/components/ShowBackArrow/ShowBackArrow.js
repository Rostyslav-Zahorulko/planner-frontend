import styles from './ShowBackArrow.module.css';

const ShowBackArrow = ({ text }) => (
  <p className={styles.show_back}>Show {text.concat('s')}</p>
);
export default ShowBackArrow;
