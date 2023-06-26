import express from "express";
import { getProducts } from "../db/index.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const products = await getProducts();
  res.render("shop", {
    products,
    // Get the `isLoggedIn` value directly here
    // @ts-ignore
    isLoggedIn: req.session.isLoggedIn,
  });
});

export default router;
