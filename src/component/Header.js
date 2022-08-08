import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className='logo' href="#home">Apna Dukaan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Ecommerce Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Graphics Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">App Development</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Product</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;