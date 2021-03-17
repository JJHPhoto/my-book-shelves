import React from "react";
import { Card } from "react-bootstrap";

function Results({ books }) {
  return (
    <Card className="my-4">
      <Card.Body>
        {books.length ? (
          <div>
            <h2> Results</h2>
            {books.map((book) => (
              <Card className="my-4" key={book.id}>
                <Card.Body>
                  <p>{book.title}</p>
                  <p>{book.description}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <h2>NO result</h2>
          </div>
        )}
      </Card.Body>
    </Card>
  );
  // <div>
  //   <h1> Results page</h1>
  // </div>
}

export default Results;
