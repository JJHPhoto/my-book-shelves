import React, { useEffect, useState } from "react";
import SavedResults from "../components/SavedResults";
import api from "../utils/api";

function SavedPage() {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    return api.getBooks().then(({ data }) => {
      setBooks(data);
    });
  };

  // useEffect(() => {
  //   getBooks();
  // }, [setBooks]);

  // console.log("savedBooks", books);

  return (
    <div>
      <h1> Saved Books</h1>
      <SavedResults books={books} getBooks={getBooks} />
    </div>
  );
}

export default SavedPage;
