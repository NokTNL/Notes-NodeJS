import express from "express";
import bodyParser from "body-parser";

const app = express();

// To see the incoming req data, just ust req.body (instead of dealing with streams and buffers by yourself)
// BUT! it does not PARSE the body for you (without parsing the body will show as `undefined`). To do that, you can use e.g. the `body-parser` package
// You pass this inside Express as a middleware, typically first-in-line of the middlewares
// The `urlencoded` parser is for form data encoded in URLs
//  - `extended: true` is just an option you need to provide for parsing rich objects/arrays
app.use(bodyParser.urlencoded({ extended: true }));

// `app.use` has a ROUTE MATCHER form. The callback will only be run when it matches the pattern you provided. If the route doesn't match, it will jump to middleware next in line.
// !!! `app.use` performs match from the start of the URL, but ignore the remaining part of the path. So "/product" will match "/product", "/product/123", "product/123/id", etc.
// If you don't provide a path, it defaults to "/" (which matches ANYTHING)
app.use("/add-product", (req, res, next) => {
  // This form will send the data to the `POST /product` route
  //  - Note that on submission, this will actually be sending the URL `/product?product=xxxxxxx`
  res.send(`<form action="/product" method="POST">
    <input type="text" name="product"/>
    <button type="submit">Add product</button>
  </form>`);
  // !!! NOTE: if you use the middleware as a route matcher, you DON'T need to call `next()`, because you want it to match only one route pattern anyway.
});

// Alternative to `app.use` (which will match any HTTP verbs), we can use ROUTING METHODS, e.g. `app.get`, `app.post` ..., which will just match the specified HTTP method.
// !!! In routing methods, unlike `app.use`, the path match is EXACT. So `app.get("/")` only matches `GET /`, but not `GET /product`.
// - However, you can pass in Regexp-like expressions and RegExp for matching. See http://expressjs.com/en/guide/routing.html and https://expressjs.com/en/5x/api.html#path-examples for more explanations.
app.post("/product", (req, res) => {
  console.log(req.body);
  // Instead of setting status code to redirect, you can use the res.redirect to do that for you
  res.redirect("/");
});

// Match-all (If none of the above middlewares actually matches anything)
app.use((req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
