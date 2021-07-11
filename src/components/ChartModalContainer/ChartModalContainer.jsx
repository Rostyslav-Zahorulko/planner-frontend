import { useState } from 'react';

import ChartModal from '../ChartModal';
import ChartService from '../ChartService';

import styles from './ChartModalContainer.module.css';

import { ReactComponent as AnalyticsIcon } from '../../images/analytics.svg';



const ChartModalContainer = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => {
    setIsModalShown(!isModalShown);
  };

  return (
    <div>
      <button type="button" className={styles.btn} onClick={toggleModal}>
        <AnalyticsIcon />
      </button>

      {isModalShown && (
        <ChartModal onClose={toggleModal}>
          <h2>Burndown Chart (Calendar Team)</h2>

          <ChartService/>
        </ChartModal>
      )}
    </div>
  );
};

export default ChartModalContainer;
