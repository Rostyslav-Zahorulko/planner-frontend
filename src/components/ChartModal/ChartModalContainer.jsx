import ChartModal from './ChartModal';
import { useState } from 'react';
import Chart from '../Chart';
const ChartModalContainer = () => {
  const [ShowModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!ShowModal);
  };
  console.log(Chart);
  return (
    <div>
      <button type="button" onClick={toggleModal}>
        open modal
      </button>
      {ShowModal && (
        <ChartModal onClose={toggleModal}>
          {/* сюда передаю график */}

          <h2>Burndown Chart(Calendar Team)</h2>

          <Chart />
        </ChartModal>
      )}
    </div>
  );
};
export default ChartModalContainer;
