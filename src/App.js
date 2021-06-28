import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';

export default function App() {
  return (
    <Container>
      <Router>
        <AppBar />
      </Router>
    </Container>
  );
}
