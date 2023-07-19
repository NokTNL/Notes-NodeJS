import express from "express";
import "dotenv/config";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import addProductRoutes from "./routes/add-product.js";
import shopRoutes from "./routes/shop.js";
import productRoutes from "./routes/products.js";
import errorRoutes from "./routes/error.js";
import notFoundRoutes from "./routes/not-found.js";

// See db/index.js

const app = express();
app.use(express.static(fileURLToPath(new URL("public", import.meta.url))));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(addProductRoutes);
app.use(shopRoutes);
app.use(productRoutes);
app.use(errorRoutes);
app.use(notFoundRoutes);

app.use((req, res, next) => {
  res.redirect("/not-found");
});

app.listen(3156);
