function factory(library, orders) {
  let obj = {};
  let result = [];

  for (const order of orders) {
    if (!obj.hasOwnProperty(order.template.name)) {
      obj.name = order.template.name;
      for (let i = 0; i < order.parts.length; i++) {
        // console.log(order.parts);
        if (!obj.hasOwnProperty(order.parts[i])) {
          obj[`${order.parts[i]}`] = library[`${order.parts[i]}`];
        }
      }
      result.push(obj);
      obj = {};
    }
  }
  return result;
}
const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];
const products = factory(library, orders);
console.log(products);
// [
//     {
//       name: 'ACME Printer',
//       print: [Function: print]
//     },
//     {
//       name: 'Initech Scanner',
//       scan: [Function: scan]
//     },
//     {
//       name: 'ComTron Copier',
//       scan: [Function: scan],
//       print: [Function: print]
//     },
//     {
//       name: 'BoomBox Stereo',
//       play: [Function: play]
//     }
//   ]
