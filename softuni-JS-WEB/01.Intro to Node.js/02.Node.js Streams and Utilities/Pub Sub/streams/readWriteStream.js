const fs = require("fs");
// Copy files
// file from which we are reading data
const readStream = fs.createReadStream("./streams/input.txt");

// file in which we are writing data
const writeStream = fs.createWriteStream("./streams/output.txt");

//React on readStream's event
readStream.on("data", (chunk) => {
  //write in the stream
  writeStream.write(chunk);
});
readStream.on("end", () => {
  console.log("finished reading");
  writeStream.end();
});
