const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  getDog() {
    // Return the pets next in line to be adopted.
    return pets.dogs.show();
  },

  getCat() {
    // Return the pets next in line to be adopted.
    return pets.cats.show();
  },
  dequeueD() {
    return pets.dogs.dequeue();
  },
  dequeueC() {
    return pets.cats.dequeue();
  },
};
