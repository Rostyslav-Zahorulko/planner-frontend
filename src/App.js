import Container from './components/Container';
import RegisterPage from './pages/RegisterPage';
//import LoginPage from './pages/LoginPage';
//import ProjectsPage from './pages/ProjectsPage';
import SprintsPage from './pages/SprintsPage';
export default function App() {
  return (
    <Container>
      {<RegisterPage></RegisterPage>}
      {/* {<LoginPage></LoginPage>} */}
      {/* <ProjectsPage></ProjectsPage> */}
      <SprintsPage />
    </Container>
  );
}
