const Router = require("express").Router;

const router = Router();

router.post("/books", (req, reqs) => {
  console.log(req.body);
  res.json({ didit: true });
});

module.exports = router;
