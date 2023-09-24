const fs = require("fs");
// Copy files
const readStream = fs.createReadStream("./input.txt");

const writeStream = fs.createWriteStream("./output.txt");
// using pipe to copy files
readStream.pipe(writeStream);
