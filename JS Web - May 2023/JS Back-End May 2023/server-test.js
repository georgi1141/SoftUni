const http = require("http");

const server = http.createServer((req, res) => {

  console.log( req);

  console.log('----------------------------------------------------------------`')
  console.log(res);



  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.write("<h1>Hello World</h1>" + ":)");
  res.end();
});

server.listen("5000");

console.log("server listening on port 5000...");
