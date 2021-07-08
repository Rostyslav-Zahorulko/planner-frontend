import { CircleLoader } from 'react-spinners';

const Spinner = () => {
  const override = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  `;
  return (
    <CircleLoader
      css={override}
      size={60}
      color={'#ff6b08'}
      speedMultiplier="1"
    />
  );
};

export default Spinner;
