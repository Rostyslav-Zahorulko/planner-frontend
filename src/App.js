import Container from './components/Container';
// import RegisterPage from './pages/RegisterPage';
import TasksPage from './pages/TasksPage/TasksPage';
// import LoginPage from './pages/LoginPage';
// import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  return (
    <Container>
      {/* {<RegisterPage></RegisterPage>} */}
      {/* {<LoginPage></LoginPage>} */}
      {/* <ProjectsPage></ProjectsPage> */}
      <TasksPage />
    </Container>
  );
}
