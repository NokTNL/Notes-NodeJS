import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";

// See `/routes` for more explanations

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// A router object is a valid middleware (even though it's not a FUNCTION!), just pass it inside app to use it:
app.use(adminRoutes);
app.use(shopRoutes);

// Match-all (404 not found)
app.use((req, res, next) => {
  // Note that an Express response is chainable
  res.status(404).send(`<h1>404 Not found</h1>`);
});

app.listen(3000);
