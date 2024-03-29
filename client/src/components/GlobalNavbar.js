import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { GiBookshelf } from "react-icons/gi";

function GlobalNavbar(props) {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">
        {" "}
        <GiBookshelf /> My Bookshelves
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Search</Nav.Link>
        <Nav.Link href="/saved">Saved</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default GlobalNavbar;
