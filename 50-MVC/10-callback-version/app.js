import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import { fileURLToPath } from "url";

// MVC is a common design pattern for web services. It comprises of 3 components:
// - Model: This reads & writes data.
//    - This is done by `db/index.js` in this example.
// - View:  This renders what the end-user sees (e.g. an HTML with all the data rendered as elements).
//    - This is handled by the HTML & templates in our `views` folder,
// - Control: This is the "business logic". It handles incoming requests, then it tells what data the Model layer should read/write, and what results the View layer should render.
//    - This is handled by the `routes` folder

// !!! Note: it is rather ugly to handle asynchoronous tasks using callbacks in `db/index.js`. You can see `../20-promise-version` for a Promise-based version.

const app = express();

app.set("view engine", "pug");
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

app.listen(3156);
