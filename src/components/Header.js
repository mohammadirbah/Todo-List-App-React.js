import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoNavbar from "../assets/logo-navbar-1.png";

const Navigation = () => {
  return (
    <Navbar 
      fixed="top"
      expand="lg"
      className="rounded-bottom-1"
      style={{ backgroundColor: "#611bb8", fontFamily: 'poppins' }}
    >
      <Container fluid>
        <Navbar.Brand className="text-white" href="#your-list">
          <img
            src={logoNavbar}
            width="50"
            height="45"
            className="d-inline-block align-top ms-5"
            alt="Logo To-Do App"
            
          />{' '}
          <strong className="">urList App</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ backgroundColor: "#ebe7f9" }}
        />
        <Navbar.Collapse id="navbarScroll" style={{ color: "#ebe7f9" }}>
          <Nav
            className="ms-auto my-2 my-lg-0 me-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#your-list"
              style={{
                color: "#ebe7f9",
                textAlign: "center",
              }}
            >
              Your List
            </Nav.Link>
            <Nav.Link
              href="#calendar"
              style={{
                color: "#ebe7f9",
                textAlign: "center",
              }}
            >
              Calendar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

class Header extends Component {
  render() {
    return (
      <main>
        <Navigation />
      </main>
    );
  }
}

export default Header;
