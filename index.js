const http = require("http");
const fs = require("fs");
const url = require("url");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  let url_parts = url.parse(req.url, true);
  let pathname = url_parts.pathname;

  if (pathname === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    const stream = fs.createReadStream("view-html/index.html");
    stream.pipe(res);
  } else if (pathname === "/todolist") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    const stream = fs.createReadStream("view-html/index.html");
    stream.pipe(res);
  } else if (pathname === "/byByy") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    const stream = fs.createReadStream("view-html/index.html");
    stream.pipe(res);
  } else {
    const stream = fs.createReadStream("public" + pathname);
    stream.on("error", (err) => {
      const not_found = fs.createReadStream("view-html/404.html");
      not_found.pipe(res);
    });
    stream.pipe(res);
  }
});
server.listen(port, hostname, () => {
  console.log(`Server Running at ${hostname}:${port}`);
});
