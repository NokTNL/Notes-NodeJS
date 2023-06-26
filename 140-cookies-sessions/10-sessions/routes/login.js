import express from "express";

const router = express.Router();

router.post("/login", (req, res, next) => {
  // You can assign ANY PROPERTIES to `req.session`. This will be sent back to the client as a `Set-Cookie` header, which will have our `isLoggedIn` value encrypted and looks something like this:
  /**
   * 'connect.sid=s%3AMXKPvxqjhx18D1WWMhcF4HRmg9iqW5SG.uYeCL%2BYS%2BDkmH2zYF5g1ILyFAY%2FScKJ2s3k%2BxE%2FSlgs; Path=/; HttpOnly'
   */
  // Since you can assign ANYTHING to req.session, typings won't be possible
  // @ts-ignore
  req.session.isLoggedIn = true;
  res.redirect("/");
});
router.get("/login", (req, res, next) => {
  // !!! Note that after the form submission in the `/login` route, because we use the <form action="..."> attribute, the browser will RELOAD the same page after the POST request has finished, so this route handler will be run even we didn't request it explicitly.
  // If the client has the session cookie we set via `POST /login` before, our session middleware can decrypt the cookie value into `req.session`, which will now contain `isLoggedIn: true` as well!
  // @ts-ignore
  req.session.isLoggedIn = false;
  res.render("login");
});

export default router;
