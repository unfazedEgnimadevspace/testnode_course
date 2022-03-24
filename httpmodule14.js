//HTTP MODULE

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("This is our about page");
  }
  res.end(
    ` <h1>
          oops
      </h1> <p>We cannot seem to find the page you are requesting for</p>
      <a href="/">back home </a>`
  );
});

server.listen(7000);
