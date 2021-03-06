const router = require("express").Router();

const { Book } = require("../models");

router
  .route("/books")
  .get((req, res) => {
    Book.find()
      .then((books) => res.json(books))
      .catch((err) => console.log(err));
  })
  .post((req, res) => {
    console.log("Books req", req.body);

    const { id, volumeInfo } = req.body;
    const { title, authors, description, imageLinks, infoLink } = volumeInfo;
    const image = imageLinks.thumbnail;
    const link = infoLink;

    Book.create({
      id,
      title,
      authors,
      description,
      image,
      link,
    })
      .then((newBook) => res.json(newBook))
      .catch((err) => console.log(err));
  });

router.route("/books/:id").delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((deletedBook) => res.json(deletedBook))
    .catch((err) => console.log(err));
});

module.exports = router;
