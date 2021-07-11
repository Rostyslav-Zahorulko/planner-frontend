import { Suspense, lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner';

import { authOperations, authSelectors } from './redux/auth';
import { isLoadingSelectors } from './redux/is-loading';

import routes from './routes';

const RegisterPage = lazy(() =>
  import(
    './pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */
  ),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
);

const ProjectsPage = lazy(() =>
  import(
    './pages/ProjectsPage/ProjectsPage' /* webpackChunkName: "projects-page" */
  ),
);

const SprintsPage = lazy(() =>
  import(
    './pages/SprintsPage/SprintsPage' /* webpackChunkName: "sprints-page" */
  ),
);

const TasksPage = lazy(() =>
  import('./pages/TasksPage/TasksPage' /* webpackChunkName: "tasks-page" */),
);

function App() {
  const { register, login, projects, sprints, tasks } = routes;

  const { getCurrentUser } = authOperations;
  const { getIsRefreshed, getToken } = authSelectors;
  const { getIsLoading } = isLoadingSelectors;

  const isLoading = useSelector(getIsLoading);
  const isRefreshed = useSelector(getIsRefreshed);
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, getCurrentUser]);

  return (
    (!token || isRefreshed) && (
      <Container>
        <ToastContainer autoClose={5000} hideProgressBar />
        <AppBar />
        {isLoading && <Spinner />}

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PublicRoute exact path={register} restricted redirectTo={projects}>
              <RegisterPage />
            </PublicRoute>

            <PublicRoute path={login} restricted redirectTo={projects}>
              <LoginPage />
            </PublicRoute>

            <PrivateRoute exact path={projects} redirectTo={login}>
              <ProjectsPage />
            </PrivateRoute>

            <PrivateRoute exact path={sprints} redirectTo={login}>
              <SprintsPage />
            </PrivateRoute>

            <PrivateRoute path={tasks} redirectTo={login}>
              <TasksPage />
            </PrivateRoute>

            <Redirect to={login} />
          </Switch>
        </Suspense>
      </Container>
    )
  );
}

export default App;
