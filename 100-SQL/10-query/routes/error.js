import express from "express";
import ErrorView from "../views/pages/error.js";

const router = express.Router();

router.get("/error", async (req, res, next) => {
  res.status(500).send(ErrorView());
});

export default router;
