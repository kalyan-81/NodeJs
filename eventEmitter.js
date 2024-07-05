const EventEmitter = require("node:events");

const emitter = new EventEmitter();
emitter.on("order pizza", (size, topping) => {
  console.log(`order recieved! baking ${size} pizza with ${topping}`);
});
emitter.on("order pizza", (size) => {
  if (size == "large") {
    console.log("serving complimentary drink");
  }
});
console.log("do work before, event occurs in the system");
emitter.emit("order pizza", "large", "chicken");
