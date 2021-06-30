import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import { projectsReducer } from './projects';
import { sprintsReducer } from './sprints';
import { tasksReducer } from './tasks';
import { currentProjectReducer } from './current-project';
import { currentSprintReducer } from './current-sprint';
import { isLoadingReducer } from './is-loading';
import { errorReducer } from './error';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    projects: projectsReducer,
    sprints: sprintsReducer,
    tasks: tasksReducer,
    currentProject: currentProjectReducer,
    currentSprint: currentSprintReducer,
    isLoading: isLoadingReducer,
    error: errorReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
