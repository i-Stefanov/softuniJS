const listeners = {};
const publish = (eventName) => {
  if (!listeners[eventName]) {
    return;
  }
  listeners[eventName].forEach((listener) => {
    listener();
  });
};
const subscribe = (eventName, eventListener) => {
  if (!listeners[eventName]) {
    listeners[eventName] = [];
  }
  listeners[eventName].push(eventListener);
};

const eventBus = {
  publish,
  subscribe,
};
module.exports = eventBus;
