const fs = require("fs/promises");

const readFilePromise = fs.readFile("./output.txt", "utf-8");
readFilePromise.then((data) => console.log(data));
