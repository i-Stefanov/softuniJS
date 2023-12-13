const fs = require("fs");
const text = "some text";
fs.writeFile("./output.txt", text, "utf-8", (err) => {
  if (err) {
    console.log("Unsuccessful file writing!");
  } else {
    console.log("Success!!!");
  }
});
