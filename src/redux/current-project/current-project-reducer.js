import { createReducer } from '@reduxjs/toolkit';
import { projectsActions } from '../projects';

const { getProjectInfoSuccess } = projectsActions;

const initialProjectState = { title: '', description: '', sprints: [] };

const currentProjectReducer = createReducer(initialProjectState, {
  [getProjectInfoSuccess]: (_, { payload }) => ({
    title: payload.title,
    description: payload.description,
    sprints: payload.sprints,
  }),
});

export default currentProjectReducer;
