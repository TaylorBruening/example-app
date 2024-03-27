import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import MainContent from './MainContent.js'

function App() {

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" style={{height: '6vh'}}>
        <Container height='5vh'>
          <Navbar.Brand href="#home">6ix Trading</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ display: 'flex' }}>
        <div style={{
          width: '10vw',
          height: '94vh',
          backgroundColor: '#9c9c9c',
          padding: '1rem'
        }}>
          Dashboard
        </div>
        <main style={{ flexGrow: '1', padding: '1rem' }}>
          <MainContent />
        </main>
      </div>
    </>
  );
}

export default App;
