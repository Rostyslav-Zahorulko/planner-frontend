import Container from './components/Container';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Container>
      {<RegisterPage></RegisterPage>}
      {/* {<LoginPage></LoginPage>} */}
    </Container>
  );
}
