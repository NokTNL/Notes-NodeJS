import express from "express";
import { fileURLToPath } from "url";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(
    fileURLToPath(new URL("../views/add-product.html", import.meta.url))
  );
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

export default router;
