import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNav() {
  return (
    <Navbar expand="lg" className="bg-warning">
      <Container>
        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;