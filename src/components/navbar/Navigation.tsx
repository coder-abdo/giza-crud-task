import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export const Navigation = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          as={NavLink} to={'/'}
          className={`${({ isActive }: { isActive: string }): string => [
            isActive ? "text-primary" : 'text-black'
          ].join(" ")}`}
        >
          Booksy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'/books/add'}
              className={`${({ isActive }: { isActive: string }): string => [
                isActive ? "text-primary" : 'text-black'
              ].join(" ")}`}>
              Add
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

