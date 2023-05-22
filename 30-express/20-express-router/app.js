import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";

// See `/routes` for more explanations

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// A router object is a valid middleware (even though it's not a FUNCTION!), just pass it inside `app` to use it
// Note that you can also add a path FILTER here. A path that match that certain INITAL SEGMENT of URL will go into the middleware, and the matching part will be TAKEN OUT.
// - e.g. if the filter is '/admin', '/admin/add-product' and '/admin/product' will both match and run this middleware; inside this middleware, '/admin' will be cropped off the matching string so you will need to match the reamining '/add-product' or '/product'
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Match-all (404 not found)
app.use((req, res, next) => {
  // Note that an Express response is chainable
  res.status(404).send(`<h1>404 Not found</h1>`);
});

app.listen(3000);
