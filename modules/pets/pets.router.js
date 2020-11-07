const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/dog", (req, res) => {
  // Return all pets currently up for adoption.
  let results = Pets.getDog();

  res.json(results);
});

router.get("/cat", (req, res) => {
  // Return all pets currently up for adoption.
  let results = Pets.getCat();

  res.json(results);
});

router.delete("/cat", json, (req, res) => {
  // Remove a pet from adoption.
  let results = Pets.dequeueC();

  res.json(results);
});

router.delete("/dog", json, (req, res) => {
  // Remove a pet from adoption.
  let results = Pets.dequeueD();

  res.json(results);
});

module.exports = router;
