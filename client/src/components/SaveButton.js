import React from "react";
import { Button } from "react-bootstrap";
import api from "../utils/api";

function SaveButton({ book }) {
  const saveBook = () => {
    api
      .addBook(book)
      .then((data) => {
        console.log("book data", data);
        console.log("yes, book added");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log("Save Book Button", book);

  return <Button onClick={saveBook}>Save</Button>;
}

export default SaveButton;
