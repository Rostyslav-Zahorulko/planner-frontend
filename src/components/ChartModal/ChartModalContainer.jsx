import ChartModal from './ChartModal';
import { useState } from 'react';

const ChartModalContainer = () => {
  const [ShowModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!ShowModal);
  };

  return (
    <div>
      <button type="button" onClick={toggleModal}>
        open modal
      </button>
      {ShowModal && (
        <ChartModal onClose={toggleModal}>
          {/* сюда передаю график */}
          <h2>chart</h2>
        </ChartModal>
      )}
    </div>
  );
};
export default ChartModalContainer;
