import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to my bookshelves app</h1>
        <p>
          If you are wanting to create a reading list with any book Google can
          finde, this is the app for you!
        </p>
      </Jumbotron>
    </div>
  );
}
