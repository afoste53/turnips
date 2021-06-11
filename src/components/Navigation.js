import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigation = (props) => {
  return (
    <header fluid>
      <Navbar className="p-4 mb-4" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Aunt Joan's Stalk Ticker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Navigation;
