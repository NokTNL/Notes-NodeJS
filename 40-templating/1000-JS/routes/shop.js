import express from "express";
import db from "../db/index.js";
import ShopView from "../views/shop.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(ShopView({ products: db.products }));
});

export default router;
