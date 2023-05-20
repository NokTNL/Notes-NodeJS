import express from "express";

// If you just want to split route middlewares into different files, instead of passing the whole app object down from the top, you can create router objects in multiple files
// This router object behaves like `app.use`:
const router = express.Router();

// Just use it like `app.use`, `app.get`, etc.
router.get("/add-product", (req, res, next) => {
  res.send(`<form action="/product" method="POST">
    <input type="text" name="product"/>
    <button type="submit">Add product</button>
  </form>`);
});

router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

// export router
export default router;
