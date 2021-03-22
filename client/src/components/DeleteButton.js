import React from "react";
import { Button } from "react-bootstrap";
import api from "../utils/api";

function DeleteButton({ bookId, getBooks, ...props }) {
  const deleteBook = () => {
    api
      .deleteBook(bookId)
      .then((book) => {
        console.log("deleted!", book);
        return getBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("deleteBook", bookId);

  return (
    <Button onClick={deleteBook} {...props}>
      Delete
    </Button>
  );
}

export default DeleteButton;
