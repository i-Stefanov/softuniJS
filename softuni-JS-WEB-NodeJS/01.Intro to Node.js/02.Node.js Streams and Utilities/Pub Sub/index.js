const eventBus = require("./eventBus");
// pass an event with name kitten-added (events are always passed in past tense)
eventBus.subscribe("kitten-added", () => {
  console.log("Kitten has been added.");
});
const unsubscribe = eventBus.subscribe("kitten-added", (kittenName) => {
  console.log(`Kitten has been added.Second time.It's name is ${kittenName}`);
});
eventBus.subscribe("kitten-removed", () => {
  console.log("Kitten has been removed.");
});

eventBus.publish("kitten-added", "Fluffy");
eventBus.publish("kitten-removed");
console.log("-----------------------");
unsubscribe();
eventBus.publish("kitten-added", "Fluffy");
eventBus.publish("kitten-removed");
