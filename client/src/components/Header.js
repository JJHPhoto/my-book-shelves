import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to my Google books search app</h1>
        <p>You can search and save books you are interested in reading.</p>
      </Jumbotron>
    </div>
  );
}
