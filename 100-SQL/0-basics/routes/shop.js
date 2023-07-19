import express from "express";
import { getProducts } from "../db/index.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const products = await getProducts();
  res.render("shop", {
    products: products,
  });
});

export default router;
