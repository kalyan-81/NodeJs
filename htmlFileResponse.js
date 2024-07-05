const http = require("node:http");
const fs = require("node:fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/login") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Login Page");
  } else if (req.url === "/api") {
    const person = {
      firstName: "kalyan",
      lastName: "Kali",
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(person));
  } else {
    res.writeHead(404);
    res.end("Page not Found");
  }
});
server.listen(3000, () => console.log("server running on port number 3000"));
