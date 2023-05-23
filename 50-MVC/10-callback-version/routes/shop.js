import express from "express";
import { getProducts } from "../db/index.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  getProducts((products) => {
    res.render("shop", {
      docTitle: "My Shop",
      products,
    });
  });
});

export default router;
