import * as dayjs from 'dayjs';
import { currentSprintActions } from '../current-sprint';

const { getSprintDisplayedDateRequest, getSprintDisplayedDateSuccess } =
  currentSprintActions;

const getDisplayedDate = date => dispatch => {
  dispatch(getSprintDisplayedDateRequest());

  let baseDisplayedDate = '';
  const today = dayjs();
  const todayFormatted = dayjs().format('DD.MM.YYYY');
  const startDate = dayjs(date);
  const startDateFormatted = dayjs(startDate).format('DD.MM.YYYY');
  const diff = today.diff(startDate, 'day');
  // console.log(startDateFormatted);
  // console.log(todayFormatted);
  // console.log(diff);
  diff > 0
    ? (baseDisplayedDate = todayFormatted)
    : (baseDisplayedDate = startDateFormatted);
  dispatch(getSprintDisplayedDateSuccess(baseDisplayedDate));
};

const currentSprintOperations = {
  getDisplayedDate,
};

export default currentSprintOperations;
