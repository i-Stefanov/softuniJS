function cats(cats) {
  class Cat {
    constructor(catName, catAge) {
      (this.catName = catName), (this.catAge = catAge);
    }
    meow() {
      console.log(`${this.catName}, age ${this.catAge} says Meow`);
    }
  }
  for (let cat of cats) {
    let [catName, catAge] = cat.split(` `);
    catAge = Number(catAge);
    let newCat = new Cat(catName, catAge);
    newCat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
