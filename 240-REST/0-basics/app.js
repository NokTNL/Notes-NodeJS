import "dotenv/config";
import express from "express";
import productRoutes from "./routes/products.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(productRoutes);

app.listen(3156);
