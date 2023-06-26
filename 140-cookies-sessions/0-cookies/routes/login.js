import express from "express";

const router = express.Router();

router.post("/login", (req, res, next) => {
  // A COOKIE is a piece of info returned by the server. It tells the browser to persist it and attach it to every later request back to the server.
  //  - Full set of cookies values: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
  //    - "Secure" means you can only send this cookie back to the server to the "https://" sites (except "localhost"), so unencrypted "http://" cannot access this pice of info. This prevents man-in-the-middle attack by accessing unencrypted info.
  //    - "HttpOnly" forbids client-side Javascript from accessing the cookie directly using e.g. `Document.cookie`. This prevents cross-site scripting attacks by injecting malicious JS into the site. Note that they are still attached to requests made by XMLHttpRequest.send() and fetch().
  //
  // You can use `res.setHeader` to set cookies in the response:
  res.setHeader("Set-Cookie", "loggedIn=true; Secure; HttpOnly; Max-Age=10");
  res.redirect("/");
});

router.get("/login", (req, res, next) => {
  // You can get the "Cookie" header from the request:
  console.log(req.get("Cookie")); // loggedIn=true
  res.render("login");
});

export default router;
