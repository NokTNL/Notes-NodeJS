import express from "express";
import { getProducts, pushProduct } from "../db/index.js";
import { productSchema } from "../models/products.js";

const router = express.Router();

router.post("/products/", async (req, res, next) => {
  const newProductSchema = productSchema.omit({ id: true });
  const newProduct = newProductSchema.parse(req.body);
  const productWithId = await pushProduct(newProduct);

  // 201 = Created
  res.status(201).send(productWithId);
});

router.get("/products/", async (req, res, next) => {
  const products = await getProducts();
  res.json(products);
});

export default router;
