function result() {
  let initialString = ``;
  function append(string) {
    return (initialString += string);
  }
  function removeStart(n) {
    initialString = initialString.substring(n);
    return initialString;
  }
  function removeEnd(n) {
    initialString = initialString.substring(0, initialString.length - n);
    return initialString;
  }
  function print() {
    console.log(initialString);
  }
  return {
    append,
    removeEnd,
    removeStart,
    print,
  };
}
let firstZero = result();
let secondZero = result();

firstZero.append("123");
firstZero.append("45");
firstZero.removeStart(2);
firstZero.removeEnd(1);

secondZero.append("hello");
secondZero.append("again");
secondZero.removeStart(3);
secondZero.removeEnd(4);
