import express from "express";

// To initalise an Express instance in your app:
const app = express();

// In Express, MIDDLEWARES handle incoming requests and pass it to another middleware, before a response is sent back to the client.
// To add a middleware, just call `app.use`. This function accepts a callback that receives 3 arguments:
//  - req
//  - res
//  - next: this is a function you call to pass the request to the NEXT middleware in line (according to the order you call `app.use`)
// If you don't call `next()` at the end of the middleware, the request will be STUCK and never finishes

// Middleware #1:
app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

// Middleware #2:
app.use((req, res, next) => {
  console.log("In another middleware");
  // `res` from Express is compatible with Node's Response tpye, with extra functionalities
  // You can use the `res.send` method to send HTML directly without calling res.setHeaders, res.write, res.end, etc.
  // By default, if you pass in a string to `send`, "Content-Type" will be set to 'text/html'
  res.send("<h1>Hello from Express!</h1>");
  // !!! NO NEED to call next() once you have called res.send()
});

// `app` is a valid route handler as well:
// const server = http.createServer(app);
// server.listen(3000);

// But you can as well just call app.listen:
app.listen(3000);
