import React from "react";
import { Card } from "react-bootstrap";
import SaveButton from "./SaveButton";

function Results({ books }) {
  return (
    <Card className="my-4">
      <Card.Body>
        {books.length ? (
          <div>
            <h2> Search Results</h2>
            {books.map((book) => (
              <Card key={book.id}>
                <Card.Body>
                  <SaveButton book={book} />
                  <p>
                    <img src={book.volumeInfo.imageLinks.thumbnail} />
                  </p>
                  <h2 className="my-3">
                    "{book.volumeInfo.title}" by {book.volumeInfo.authors}
                  </h2>
                  <h3>Book description:</h3>
                  <p>{book.volumeInfo.description}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <h2>No Search Result</h2>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Results;
