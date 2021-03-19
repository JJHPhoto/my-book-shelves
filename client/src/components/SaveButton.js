import React from "react";
import { Button } from "react-bootstrap";
import api from "../utils/api";

function SaveButton({ book, updateBook }) {
  const saveBook = () => {
    api
      .addBook(book)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return <Button onClick={saveBook}>Save</Button>;
}

export default SaveButton;
