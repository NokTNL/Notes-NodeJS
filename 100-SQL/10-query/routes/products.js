import express from "express";
import { getProductById } from "../db/index.js";
import ProductView from "../views/pages/products/[id].js";

const router = express.Router();

router.get("/products/:id", async (req, res, next) => {
  try {
    const product = await getProductById(req.params.id);
    res.send(
      ProductView({
        title: product.title,
        description: product.description,
      })
    );
  } catch (err) {
    console.error(err?.message);
    res.redirect("/not-found");
  }
});

export default router;
