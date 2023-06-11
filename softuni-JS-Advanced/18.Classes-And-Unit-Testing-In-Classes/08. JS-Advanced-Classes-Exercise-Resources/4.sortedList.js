class List {
  constructor() {
    this.arr = [];
    this.size = 0;
  }
  isValid(n) {
    return n < this.arr.length && n >= 0;
  }
  add(n) {
    this.arr.push(n);

    this.arr = this.arr.sort((a, b) => {
      return a - b;
    });
    this.size = this.arr.length;
  }
  remove(index) {
    if (this.isValid(index)) {
      this.arr.splice(index, 1);

      this.arr = this.arr.sort((a, b) => {
        return a - b;
      });
      this.size = this.arr.length;
    }
  }
  get(index) {
    if (this.isValid(index)) {
      return this.arr[index];
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
console.log(list.get(4));
console.log(list.get(-1));
list.remove(1);
console.log(list.get(1));
