import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to={'/'} style={({ isActive }) => ({
          color: isActive ? 'steelblue' : 'inherit',
        })}>
          Booksy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'/books/add'} style={({ isActive }) => ({
              color: isActive ? 'steelblue' : 'inherit',
            })}>
              Add
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
