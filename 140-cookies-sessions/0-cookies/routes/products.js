import express from "express";
import { getProductById } from "../db/index.js";
import { fileURLToPath } from "url";

const router = express.Router();

// Here we use `:id` to extract the `id` param
router.get("/products/:id", async (req, res, next) => {
  try {
    // Path params (the ones separated by "/" ad extracted by ":") will be in req.params
    const product = await getProductById(req.params.id);
    // Query params ("?edit=true&id=12345) will be in req.query
    // console.log(req.query); // {edit: 'true', id: 12345}
    res.render("products", {
      product: product,
    });
  } catch (err) {
    console.error(err?.message);
    next();
  }
});

export default router;
