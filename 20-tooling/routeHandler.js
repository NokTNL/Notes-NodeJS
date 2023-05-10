import fs from "fs";

export const routeHandler = (req, res) => {
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
    res.end();
    return;
  }
  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    console;
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      fs.writeFile("message.txt", parsedBody, (err) => {
        console.log("File writing done!");

        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
    return;
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head></head>");
  res.write("<body><h1>Hello World!</h1></body>");
  res.write("</html>");
  res.end();
  return;
};
