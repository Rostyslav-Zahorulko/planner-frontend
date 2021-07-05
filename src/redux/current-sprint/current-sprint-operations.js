import * as dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { currentSprintActions } from '../current-sprint';
dayjs.extend(customParseFormat);

const {
  getSprintDisplayedDateRequest,
  getSprintDisplayedDateSuccess,
  setNewDisplayedDateSuccess,
} = currentSprintActions;

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

const setNextDate = date => dispatch => {
  const newDisplayedDate = dayjs(date, 'DD.MM.YYYY')
    .add(1, 'day')
    .format('DD.MM.YYYY');
  // console.log(newDisplayedDate);
  dispatch(setNewDisplayedDateSuccess(newDisplayedDate));
};

const setPreviousDate = date => dispatch => {
  const newDisplayedDate = dayjs(date, 'DD.MM.YYYY')
    .subtract(1, 'day')
    .format('DD.MM.YYYY');
  dispatch(setNewDisplayedDateSuccess(newDisplayedDate));
};

const currentSprintOperations = {
  getDisplayedDate,
  setNextDate,
  setPreviousDate,
};

export default currentSprintOperations;
