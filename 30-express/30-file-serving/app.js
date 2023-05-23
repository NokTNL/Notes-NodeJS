import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import { fileURLToPath } from "url";

// See `/routes` for how to send files and deal with file paths
// (See `/utils` to see how to get the root directory path (for CommonJS only))
// See here on how to serve file statically (e.g. for CSS stylesheets)

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// To serve a file statically, you need to make certain folder in our file system publically available. `express.static` serves that purpose.
// You can put multiple `express.static` middlewares, and Express will run through each of them until it gets a hit
// Note that when using the static files in e.g. an HTML file, you don't specify "/public"; simply use the path as if it is already in the "/public" folder
app.use(express.static(fileURLToPath(new URL("public", import.meta.url))));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(fileURLToPath(new URL("views/404.html", import.meta.url)));
});

app.listen(3000);
