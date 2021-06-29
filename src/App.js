import { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import routes from './routes';

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

// const TasksPage = lazy(() =>
//   import('./pages/TasksPage/TasksPage' /* webpackChunkName: "tasks-page" */),
// );

export default function App() {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute exact path={register} restricted redirectTo={projects}>
            <RegisterPage />
          </PublicRoute>

          <PublicRoute path={login} restricted redirectTo={projects}>
            <LoginPage />
          </PublicRoute>

          {/* <PrivateRoute exact path={projects} redirectTo={login}> */}
          <ProjectsPage />
          {/* </PrivateRoute> */}

          <PrivateRoute exact path={sprints} redirectTo={login}>
            <SprintsPage />
          </PrivateRoute>

          {/* <PrivateRoute path={tasks} redirectTo={login}>
            <TasksPage />
          </PrivateRoute> */}
        </Switch>
      </Suspense>
    </Container>
  );
}
