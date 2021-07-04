import ChartModal from './ChartModal';
import { useState } from 'react';
import Chart from '../Chart';
import styles from '../AddButton/AddButton.module.css';
import { ReactComponent as AnalyticsIcon } from '../../images/analytics.svg';
const ChartModalContainer = () => {
  const [ShowModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!ShowModal);
  };

  return (
    <div>
      <button type="button" className={styles.btn} onClick={toggleModal}>
        <AnalyticsIcon />
      </button>
      {ShowModal && (
        <ChartModal onClose={toggleModal}>
          <h2>Burndown Chart(Calendar Team)</h2>

          <Chart />
        </ChartModal>
      )}
    </div>
  );
};
export default ChartModalContainer;
