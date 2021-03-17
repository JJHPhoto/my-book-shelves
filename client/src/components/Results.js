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
              <Card className="my-4" key={book.id}>
                <Card.Body>
                  <SaveButton />
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

export default Results;
