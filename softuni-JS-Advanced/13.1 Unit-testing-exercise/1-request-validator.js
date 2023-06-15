function requestValidator(obj) {
  let validHTTPMethods = ["GET", "POST", "DELETE", "CONNECT"];
  let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let uriPattern = /^[\w.*]+$/gm;
  let specialChr = [`<`, `>`, `\\`, `&`, `'`, `"`];
  if (!validHTTPMethods.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method.");
  }
  if (!obj.hasOwnProperty("method")) {
    throw new Error("Invalid request header: Invalid Method.");
  }
  if (!obj.hasOwnProperty("version") || !validVersions.includes(obj.version)) {
    throw new Error("Invalid request header: Invalid Version.");
  }
  if (!obj.uri) {
    throw new Error("Invalid request header: Invalid URI.");
  }
  if (obj.uri !== "*" && !obj.uri.match(uriPattern)) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!obj.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  }
  for (let ch of obj.message) {
    if (specialChr.includes(ch)) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }
  return obj;
}
requestValidator({
  method: "OPTIONS",
  uri: "git.master",
  version: "HTTP/1.1",
  message: "-recursive",
});
