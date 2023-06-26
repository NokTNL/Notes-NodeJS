import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import productRoutes from "./routes/products.js";
import loginRoutes from "./routes/login.js";
import { fileURLToPath } from "url";

// See here and `routes/login` for sessions
// See `routes/shop` for how to utilise the cookies

const app = express();

app.set("view engine", "pug");
app.set("views", fileURLToPath(new URL("views", import.meta.url)));
app.use(express.static(fileURLToPath(new URL("public", import.meta.url))));
// A SESSION is a stored value mapped to a user, possibly with an expiry date.
// Use the express-session import as a middleware. `express-session`
app.use(
  session({
    // Server secret. This has to be a long string in production and should be an env var
    secret: "some long string",
    // You can set cookie header values here. httpOnly is `true` by default; `maxAge` is not set so the browser will consider this as a SESSION cookie, i.e. will delete it after the browser is closed
    // Note that if you set `secure: true` or a `maxAge`, you can't directly assign to req.session in `routes/login.js`, and the cookie will no longer be visible in the browser. (at least in `localhost` that's the case)
    cookie: {
      // secure: true,
      // httpOnly: true,
      // sameSite: "strict",
      // maxAge: 10,
    },
    // The below are recommended values by express-session:
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(productRoutes);
app.use(loginRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(3156);
