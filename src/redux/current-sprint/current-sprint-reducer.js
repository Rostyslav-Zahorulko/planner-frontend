import { createReducer } from '@reduxjs/toolkit';
import { sprintsActions } from '../sprints';

const { getSprintInfoSuccess } = sprintsActions;

const initialSprintState = { title: '', duration: '', startDate: '' };

const currentSprintReducer = createReducer(initialSprintState, {
  [getSprintInfoSuccess]: (_, { payload }) => ({
    title: payload.sprint.title,
    duration: payload.sprint.duration,
    startDate: payload.sprint.startDate,
  }),
});

export default currentSprintReducer;
