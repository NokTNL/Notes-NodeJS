import express from "express";
import { fileURLToPath } from "url";
import { pushProduct } from "../db/index.js";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(
    fileURLToPath(new URL("../views/add-product.html", import.meta.url))
  );
});

router.post("/add-product", async (req, res) => {
  await pushProduct(req.body?.name);
  res.redirect("/");
});

export default router;
