import express from "express";
import { pushProduct } from "../db/index.js";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  // @ts-ignore
  res.render("add-product", { isLoggedIn: req.session.isLoggedIn });
});

router.post("/add-product", async (req, res) => {
  await pushProduct(req.body?.name);
  res.redirect("/");
});

export default router;
