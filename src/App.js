import { Switch } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProjectsPage from './pages/ProjectsPage';
import SprintsPage from './pages/SprintsPage';
import TasksPage from './pages/TasksPage';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Container from './components/Container';

import routes from './routes';

const { register, login, projects, sprints, tasks } = routes;

export default function App() {
  return (
    <Container>
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
      </Switch>
    </Container>
  );
}
