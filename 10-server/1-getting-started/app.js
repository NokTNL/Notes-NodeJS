// To run this code, just type `node <file-name.js>`

// The `http` module is a CORE module that comes with NodeJS
const http = require("http");

// Create a server, passing in a REQUEST HANDLER
const server = http.createServer((req, res) => {
  // This returns an HTML!
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head></head>");
  res.write("<body><h1>Hello World!</h1></body>");
  res.write("</html>");
  res.end();

  // We can manually exit the running process by calling process.exit()
  // process.exit();
});

// Normally, executing a Node file will exit after finishing execution. However, server.listen() makes the process KEEPS RUNNING and listening to e.g. incoming requests
// If you visit localhost:3000 in the browser, you actually can access this server!
server.listen(3000);
