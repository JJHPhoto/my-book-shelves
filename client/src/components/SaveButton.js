import React from "react";
import { Button } from "react-bootstrap";
import api from "../utils/api";

function SaveButton({ book, updateBook }) {
  const saveBook = () => {
    api
      .addBook(book)
      .then(() => {
        console.log("yes");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("savebook", book);

  return <Button onClick={saveBook}>Save</Button>;
}

export default SaveButton;
