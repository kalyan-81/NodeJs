const http = require("node:http");
const server = http.createServer((req, res) => {
  const person = {
    fname: "kalyan",
    lname: "Cheru",
    gender: "Male",
  };
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello world</h1>");
});
server.listen(3000, () => console.log("server running on port number 3000"));
