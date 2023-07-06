import express from "express";
import { fileURLToPath } from "url";
import db from "../db/index.js";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(
    fileURLToPath(new URL("../views/add-product.html", import.meta.url))
  );
});

router.post("/add-product", (req, res) => {
  db.products.push(req.body?.name);
  res.redirect("/");
});

export default router;
