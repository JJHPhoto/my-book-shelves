import React from "react";
import { Button, Card, Form } from "react-bootstrap";

function SearchForm() {
  return (
    <Card>
      <Card.Body>
        <h2>Search</h2>
        <Form>
          <Form.Group controlId="formBookName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder="Enter the name of a book." />
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
