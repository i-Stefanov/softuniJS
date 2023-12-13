const fs = require("fs");
const readStream = fs.createReadStream("./input.txt", { highWaterMark: 10000 });
readStream.on("data", (chunk) => {
  console.log("reading.........");
  console.log(chunk);
});
readStream.on("end", () => {
  console.log("Reading has finished!");
});
