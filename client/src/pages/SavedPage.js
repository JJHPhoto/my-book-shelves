import React, { useEffect } from "react";
import api from "../utils/api";

function SavedPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.getBooks().then(({ data }) => {
      setBooks(data);
    });
  }, [setBooks]);

  console.log("savedBooks", books);

  return (
    <div>
      <h1> Saved page</h1>
    </div>
  );
}

export default SavedPage;
