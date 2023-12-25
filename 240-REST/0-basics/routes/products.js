import express from "express";
import { getProducts, pushProduct } from "../db/index.js";

const router = express.Router();

router.post("/products/", async (req, res, next) => {
  // 🤯 Needs validation, very dangerous
  const productWithId = await pushProduct({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });

  // 201 = Created
  res.status(201).send(productWithId);
});

router.get("/products/", async (req, res, next) => {
  const products = await getProducts();
  res.json(products);
});

export default router;
