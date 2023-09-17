const eventBus = require("./eventBus");
// pass an event with name kitten-added (events are always passed in past tense)
eventBus.subscribe("kitten-added", () => {
  console.log("Kitten has been added.");
});

eventBus.publish("kitten-added");
