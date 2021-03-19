const router = require("express").Router();

const { Book } = require("../models");

router.post("/books", (req, res) => {
  console.log("Books Body", req.body);

  const { title, authors, description, image, link } = req.body;

  Book.create({
    title,
    authors,
    description,
    image,
    link,
  })
    .then((newBook) => res.json(newBook));
    .catch(err => console.log(err));
});

module.exports = router;
