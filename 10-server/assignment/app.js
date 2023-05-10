import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      res.end();
    });
    return;
  }
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head></head>
        <body>
          <form action='/create-user' method='POST'>
            <label>
                Create new user:
                <input name='username' />
            </label>
            <button type='submit'>Submit user</button>
          </form>
        </body>
      </html>
    `);
    res.end();
    return;
  }
  if (req.url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head></head>
        <body>
          <ul>
            <li>User 1</li>
            <li>User 2</li>
          </ul>
        </body>
      </html>
    `);
    res.end();
    return;
  }
  // No-match
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.write(`
      <html>
        <head></head>
        <body>
          <h1>404 Not found</h1>
        </body>
      </html>
    `);
  res.end();
  return;
});

server.listen(3000);
