import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import productRoutes from "./routes/products.js";
import loginRoutes from "./routes/login.js";
import { fileURLToPath } from "url";

// See `/routes/login.js` for cookies basics

const app = express();

app.set("view engine", "pug");
app.set("views", fileURLToPath(new URL("views", import.meta.url)));
app.use(express.static(fileURLToPath(new URL("public", import.meta.url))));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(productRoutes);
app.use(loginRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(3156);
