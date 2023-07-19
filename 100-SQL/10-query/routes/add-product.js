import express from "express";
import { fileURLToPath } from "url";
import { pushProduct } from "../db/index.js";
import AddProductView from "../views/pages/add-product.js";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(AddProductView());
});

router.post("/add-product", async (req, res) => {
  try {
    await pushProduct(req.body?.name);
    res.redirect("/");
  } catch (err) {
    console.error(err?.message);
    res.redirect("/error");
  }
});

export default router;
