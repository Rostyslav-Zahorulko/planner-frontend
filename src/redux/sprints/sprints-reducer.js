import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { projectsActions } from '../projects';
import { sprintsActions } from '../sprints';

const { getProjectInfoSuccess } = projectsActions;

const { addSprintSuccess, deleteSprintSuccess, editSprintTitleSuccess } =
  sprintsActions;

const itemsReducer = createReducer([], {
  [getProjectInfoSuccess]: (_, { payload }) => payload.sprints,
  [addSprintSuccess]: (_, { payload }) => payload,
  [deleteSprintSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [editSprintTitleSuccess]: (state, { payload }) =>
    state.map(sprint => (sprint.id === payload.id ? payload : sprint)),
});

const sprintsReducer = combineReducers({
  items: itemsReducer,
});

export default sprintsReducer;
