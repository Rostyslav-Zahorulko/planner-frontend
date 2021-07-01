import deleteError from './error-actions';

const resetErrorOperation = () => async dispatch => {
  dispatch(deleteError());
};

export default resetErrorOperation;
