import React from "react";
import { Button, Card } from "react-bootstrap";
import DeleteButton from "./DeleteButton";

function SavedResults({ books, getBooks }) {
  return (
    <Card className="my-4">
      <Card.Body>
        {books.length ? (
          <div>
            <h2> Results</h2>
            {books.map((book) => (
              <Card className="my-4" key={book._id}>
                <Card.Body>
                  <Button href={book.link}>View</Button>
                  <DeleteButton
                    bookId={book._id}
                    getBooks={getBooks}
                    className="ml-2"
                  />
                  <p className="my-4">{book.title}</p>
                  <p>{book.description}</p>
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

export default SavedResults;
