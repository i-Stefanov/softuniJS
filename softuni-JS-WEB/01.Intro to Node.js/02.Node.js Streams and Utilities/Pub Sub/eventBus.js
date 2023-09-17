const listeners = {};
//The event bus can hsve only two functions publish and subscribe
const publish = (eventName, ...eventArgs) => {
  if (!listeners[eventName]) {
    return;
  }
  listeners[eventName].forEach((listener) => {
    listener(...eventArgs);
  });
};
const subscribe = (eventName, eventListener) => {
  if (!listeners[eventName]) {
    listeners[eventName] = [];
  }
  listeners[eventName].push(eventListener);
  //The subscribe function can return another function that unsubscribes from events of our choice
  return () => {
    // console.log("before unsub");
    // console.log(listeners);
    listeners[eventName] = listeners[eventName].filter(
      (listener) => listener != eventListener
    );
    // console.log("after unsub");
    // console.log(listeners);
  };
};

const eventBus = {
  publish,
  subscribe,
};
module.exports = eventBus;
