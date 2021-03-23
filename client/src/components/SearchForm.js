import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
// import api from "../utils/api";

function SearchForm({ setBooks }) {
  const [APIKEY, setAPIKEY] = useState(
    "AIzaSyBN5BdHj9x_qT1p_mD1809eAejL-c-U7zE"
  );

  const bookSearch = useRef({ setBooks });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          bookSearch.current.value +
          "&key=" +
          APIKEY
      )
      .then(({ data }) => {
        console.log("Google Books!", data.items);
        setBooks(data.items);
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
