const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");

const router = express.Router();

router.get("/", (req, res) => {
  let results = People.get();
  res.json(results);
});

router.post("/", json, (req, res) => {
  // Add a new person to the queue.
  let { name } = req.body;

  let results = People.enqueues(name);

  res.json(results);
  
});

router.delete('/', (req, res) => {
  let results = People.dequeue();

  res.json(results);

});

module.exports = router;
