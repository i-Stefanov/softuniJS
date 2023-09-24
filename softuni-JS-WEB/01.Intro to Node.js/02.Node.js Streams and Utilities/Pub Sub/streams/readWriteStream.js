const fs = require("fs");
// Copy files
const readStream = fs.createReadStream("./input.txt");

const writeStream = fs.createWriteStream("./output.txt");

//React on readStream's event
readStream.on("data", (chunk) => {
  //write in the stream
  writeStream.write(chunk);
});
readStream.on("end", () => {
  console.log("finished reading");
  writeStream.end();
});
