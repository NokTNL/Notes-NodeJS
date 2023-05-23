import express from "express";
import db from "../db/index.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  // Instead of`sendFile`, you can use `res.render` by the view engine you defined
  // It will look for 'shop.pug' in the 'views' folders you specified in `app.set`
  // Then, you pass in your dynamic data as an object in the second argument
  res.render("shop", {
    docTitle: "My Shop",
    products: db.products,
  });
});

export default router;
