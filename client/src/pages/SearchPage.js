import React, { useState } from "react";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";

function SearchPage() {
  const [books, setBooks] = useState([]);

  console.log("Books", books);

  return (
    <div>
      <SearchForm setBooks={setBooks} />
      <Results books={books} />
    </div>
  );
}

export default SearchPage;
