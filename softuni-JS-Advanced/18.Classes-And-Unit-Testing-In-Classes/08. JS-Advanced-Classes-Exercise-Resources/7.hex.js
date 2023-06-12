class Hex {
  constructor(value) {
    this.value = value;
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return `0x${this.value.toString(16)}`;
  }
  plus(n) {
    let result;
    if (isNaN(n)) {
      result = (parseInt(this.value, 2) + parseInt(n, 2)).toString(16);
    } else {
      result = this.value + n;
    }

    return result;
  }
  minus(n) {
    let result;
    if (isNaN(n)) {
      result = (parseInt(this.value, 2) - parseInt(n, 2)).toString(16);
    } else {
      result = this.value - n;
    }

    return result;
  }
  parse(string) {
    return parseInt(string, 2);
  }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(FF.parse("AAA"));
