import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import { fileURLToPath } from "url";

// You can actually just template with vanilla JS, as what you need is just a string. See `views/shop.js`

const app = express();

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
