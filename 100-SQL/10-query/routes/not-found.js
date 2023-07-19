import express from "express";
import NotFoundView from "../views/pages/not-found.js";

const router = express.Router();

router.get("/not-found", async (req, res, next) => {
  res.status(404).send(NotFoundView());
});

export default router;
