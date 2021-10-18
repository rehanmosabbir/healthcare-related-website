import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-nav">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="danger"
        variant="dark"
        className="py-2 fixed-top"
      >
        <Container>
          <NavLink to="/" className="fs-5">
            <FontAwesomeIcon className="me-2 text-white" icon={faStethoscope} />
            Circle Hospital BD
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/doctors">Find a doctor</Link>
              <Link to="/about">About us</Link>
              <Link to="/contact">Contact us</Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
