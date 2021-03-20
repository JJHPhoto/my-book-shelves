import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import api from "../utils/api";

function SearchForm({ setBooks }) {
  const bookSearch = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // bookSearch.current.value;
    // console.log(bookSearch.current);

    api.getGoogleBooks(bookSearch.current.value).then(({ data }) => {
      setBooks(data);
      // console.log(data);
    });
  };

  return (
    <Card>
      <Card.Body>
        <h2>Search</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBookName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              ref={bookSearch}
              type="text"
              placeholder="Enter the name of a book."
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SearchForm;
