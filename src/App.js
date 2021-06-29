import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProjectsPage from './pages/ProjectsPage';

import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';

export default function App() {
  return (
    <Container>
      <AppBar />

      {<RegisterPage />
      {/* {<LoginPage /> */}
      {/* <ProjectsPage /> */}
    </Container>
  );
}
