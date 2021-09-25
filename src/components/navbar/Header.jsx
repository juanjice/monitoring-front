import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function Header() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>Monitoring</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/overview">
            <Nav.Link>Overview</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/curriculum">
            <Nav.Link>Curriculim Vitae</Nav.Link>
          </LinkContainer>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
        <Nav>
          <LinkContainer to="/register">
            <Nav.Link>
              <button type="button" className="btn btn-primary">
                Register
              </button>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>
              <button type="button" className="btn btn-success">
                Login
              </button>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
