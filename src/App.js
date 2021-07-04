import { Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { authOperations } from './redux/auth';

import routes from './routes';
// import { connect } from 'formik';

const { register, login, projects, sprints, tasks } = routes;

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

function App(props) {
  useEffect(() => {
    props.onGetCurrentUser();
  });

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        {/*<Switch>
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
  </Switch>*/}

        <Switch>
          <RegisterPage exact path={register} />

          <LoginPage path={login} />

          <ProjectsPage exact path={projects} />

          <SprintsPage exact path={sprints} />

          <TasksPage path={tasks} />
        </Switch>
      </Suspense>
    </Container>
  );
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
