const http = require("http");
const port = 5050;
const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(method);
  console.log(url);
  res.write("Server is running.Updated");
  res.end();
});
server.listen(port);
console.log(`Server is listening on port: ${port}`);
