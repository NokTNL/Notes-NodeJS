const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  /**
   * Write a simple page routing
   */
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head></head>");
    res.write(`<body>
                  <form action="/message" method="POST">
                  <input type="text" name="message"/>
                  <button type="submit">Submit</button>
                 </form>
               </body>
    `);
    res.write("</html>");
    // res.end tells Node that the response is considered ready to be sent; any writing to `res` will throw errors
    res.end();
    // RETURN here to prevent the code below to be run
    return;
  }
  /**
   * The form submitted in the above "/" route will have data directed to here
   */
  if (req.url === "/message" && req.method === "POST") {
    // NodeJS does not have a `req.body` field, because the data from a request comes in a STREAM, i.e. the request has arrived, but the data has not fully arrived (esp. when data is huge)
    // NodeJS (and Javascript in general) allows you to work with request data BEFORE all data has arrived, by splitting data into CHUNKS
    const body = [];
    // On detecting incoming data chunks
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    // On data stream ends
    req.on("end", () => {
      // Buffer.concat joins a Uint8Array[] into one single buffer
      // Then call Buffer.toString() to make it human-readable
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      // Write the message to a file!
      fs.writeFileSync("message.txt", parsedBody);

      // Here it end the response AFTER file writing is done
      // 302 = resource found, redirecting
      res.statusCode = 302;
      // the 'Location' header will redirect user to a certain path
      res.setHeader("Location", "/");
      res.end();
    });
    return;
  }

  // No match default route
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head></head>");
  res.write("<body><h1>Hello World!</h1></body>");
  res.write("</html>");
  res.end();
  return;
});

server.listen(3000);
