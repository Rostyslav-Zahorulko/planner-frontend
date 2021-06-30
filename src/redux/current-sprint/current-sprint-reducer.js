import { createReducer } from '@reduxjs/toolkit';
import { sprintsActions } from '../sprints';

const { getSprintInfoSuccess } = sprintsActions;

const initialSprintState = { title: '', duration: '' };

const currentSprintReducer = createReducer(initialSprintState, {
  [getSprintInfoSuccess]: (_, { payload }) => ({
    title: payload.title,
    duration: payload.duration,
  }),
});

export default currentSprintReducer;
