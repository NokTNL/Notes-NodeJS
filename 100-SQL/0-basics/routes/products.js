import express from "express";
import { getProductById } from "../db/index.js";
import { fileURLToPath } from "url";

const router = express.Router();

// Here we use `:id` to extract the `id` param
router.get("/products/:id", async (req, res, next) => {
  try {
    // Path params (the ones separated by "/" and extracted by ":") will be in req.params
    const product = await getProductById(req.params.id);
    // Query params ("?edit=true&id=12345) will be in req.query
    // console.log(req.query); // {edit: 'true', id: 12345}
    res.render("products", {
      product: product,
    });
  } catch (err) {
    console.error(err?.message);
    res.sendFile(fileURLToPath(new URL("../views/404.html", import.meta.url)));
  }
});

export default router;
