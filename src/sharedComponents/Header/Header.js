import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="main-nav">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="danger"
        variant="dark"
        className="py-2 sticky-top"
      >
        <Container>
          <NavLink to="/" className="fs-5">
            <FontAwesomeIcon className="me-2 text-white" icon={faStethoscope} />
            Circle Hospital BD
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                About us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact us
              </Nav.Link>
              {user?.email ? (
                <Button onClick={logOut} variant="warning">
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
            <Navbar.Text>
              Signed in as :{" "}
              <a href="#login">{user?.displayName || user?.email}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
