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
import isLoadingReducer from './isLoading/isLoading-reducer';
import errorReducer from './error/error-reducer';

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
    isoading: isLoadingReducer,
    error: errorReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
