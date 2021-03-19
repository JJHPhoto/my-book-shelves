import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { GiBookshelf } from "react-icons/gi";

function GlobalNavbar(props) {
  return (
    <Navbar
      className={props.isloggedin ? `bg-primary` : `bg-test`}
      variant="dark"
    >
      <Navbar.Brand href="#home">
        {" "}
        <GiBookshelf /> Google Books
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Search</Nav.Link>
        <Nav.Link href="/saved">Saved</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default GlobalNavbar;
