import express from "express";
import { getProducts } from "../db/index.js";
import ShopView from "../views/pages/shop.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await getProducts();
    res.send(ShopView({ products }));
  } catch (err) {
    console.error(err?.message);
    res.redirect("/error");
  }
});

export default router;
