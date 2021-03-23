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
              <Card className="my-4" key={books._id}>
                <Card.Body>
                  <Card.Title>{books.volumeInfo.title}</Card.Title>
                  {/* <Button href={book.selfLink}>View</Button> */}
                  <DeleteButton
                    bookId={book._id}
                    getBooks={getBooks}
                    className="ml-2"
                  />
                  {/* <p>
                    <img src={book.volumeInfo.imageLinks.thumbnail} />
                  </p>
                  <h2 className="my-3">
                    "{book.volumeInfo.title}" by {book.volumeInfo.authors}
                  </h2>
                  <h3>Book description:</h3>
                  <p>{book.volumeInfo.description}</p> */}
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
