import express from "express";
import bodyParser from "body-parser";

const app = express();

// To see the incoming req data, just ust req.body (instead of dealing with streams and buffers by yourself)
// BUT! it does not PARSE the body for you (without parsing the body will show as `undefined`). To do that, you can use e.g. the `body-parser` package
// You pass this inside Express as a middleware, typically first-in-line of the middlewares
// The `urlencoded` parser is for form data encoded in URLs
//  - `extended: true` is just an option you need to provide for parsing rich objects/arrays
app.use(bodyParser.urlencoded({ extended: true }));

// `app.use` has a route matcher form. The callback will only be run when it matches the pattern you provided. If the route doesn't match, it will jump to middleware next in line.
app.use("/add-product", (req, res, next) => {
  // This form will send the data to the `POST /product` route
  //  - Note that on submission, this will actually be sending the URL `/product?product=xxxxxxx`
  res.send(`<form action="/product" method="POST">
    <input type="text" name="product"/>
    <button type="submit">Add product</button>
  </form>`);
  // !!! NOTE: if you use the middleware as a route matcher, you DON'T need to call `next()`, because you want it to match only one route pattern anyway.
});

// Alternative to `app.use` (which will match any HTTP verbs), you can use `app.use` to just match a POST request:
app.get("/product", (req, res) => {
  console.log(req.body);
  // Instead of setting status code to redirect, you can use the res.redirect to do that for you
  res.redirect("/");
});

// NOTE: '/' matches ANYTHING. For less specific route patterns, you probably want to put this middleware last, unless you want it to run whatever the request URL is, then call next() to pass it to another route matcher.
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
