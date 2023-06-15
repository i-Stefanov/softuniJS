function createSortedList() {
  let list = [];
  let result = {
    add,
    remove,
    get,
    size: 0,
  };
  return result;
  function add(num) {
    list.push(num);
    this.size++;
    list.sort((a, b) => a - b);
  }
  function remove(index) {
    if (isVAlid(index)) {
      list.splice(index, 1);
      this.size--;
    }
  }
  function get(index) {
    if (isVAlid(index)) {
      return list[index];
    }
  }
  function isVAlid(index) {
    return index >= 0 && index < list.length;
  }
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
