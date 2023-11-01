const http = require('http'); // this is a module to create a server
let foo = {name:"Mark",numer:13}
const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
  res.writeHead(200, { "Content-Type": "application/json"});
//   res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.write(JSON.stringify(foo));
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});