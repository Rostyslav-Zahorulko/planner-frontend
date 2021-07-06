import { createReducer } from '@reduxjs/toolkit';
import { projectsActions } from '../projects';

const { getProjectInfoSuccess } = projectsActions;

const initialProjectState = { title: '', description: '' };

const currentProjectReducer = createReducer(initialProjectState, {
  [getProjectInfoSuccess]: (_, { payload }) => ({
    title: payload.title,
    description: payload.description,
    team: payload.team,
  }),
});

export default currentProjectReducer;
