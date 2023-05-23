import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import { fileURLToPath } from "url";

const app = express();

// See `/views/*.pug` on how to generate a Pug template
// See `/routes/shop.js` on how to render the template

// `app.set` sets global configuration for the app. See https://expressjs.com/en/5x/api.html#app.set
// 'view engine' sets the view engine
app.set("view engine", "pug");
// 'views' is a string or an array of strings of the views folder; default to `process.cwd() + '/views'` (process.cwd() is the location where the NodeJS process is running from)
app.set("views", fileURLToPath(new URL("views", import.meta.url)));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(fileURLToPath(new URL("public", import.meta.url))));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(fileURLToPath(new URL("views/404.html", import.meta.url)));
});

app.listen(3000);
