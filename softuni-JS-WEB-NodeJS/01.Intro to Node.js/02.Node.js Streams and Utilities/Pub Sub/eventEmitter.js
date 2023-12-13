const EventEmiter = require("events");
// create new instance of the class EventEmiter which we import from the built in in nodejs module events
const eventEmiter = new EventEmiter();

// pass an event with name kitten-added (events are always passed in past tense)
// similar to addEventListener
eventEmiter.on("kitten-added", () => {
  console.log("Kitten has been added.");
});
eventEmiter.on("kitten-added", (kittenName) => {
  console.log(`Kitten has been added.Second time.It's name is ${kittenName}`);
});
eventEmiter.on("kitten-removed", () => {
  console.log("Kitten has been removed.");
});
// publish equivalent
// .emit means triger the  'kitten added event'
eventEmiter.emit("kitten-added", "Fluffy");
eventEmiter.emit("kitten-removed");
