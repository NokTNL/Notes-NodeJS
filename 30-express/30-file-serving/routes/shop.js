import express from "express";
import { fileURLToPath } from "url";

const router = express.Router();

router.get("/", (req, res, next) => {
  // - Express provides the res.sendFile util function as well, which we can use to send file data. Content-Type header will be set for us automatically.
  // - !!! Note that if you use absolute path like "/views/shop.html", it won't work as it points to the root file on our OS!
  //   - For CommonJS, you can use `__dirname` instead, which is a global var provided by NodeJS to point to the CURRENT MODULE's path in the OS.
  //   - For ES Modules, `__dirname` and `__filename` are NOT available, but it has a browser-compatible `import.meta.url`.
  //      - `import.meta.url` will be a URL like this: "file:///Users/nok-hhl/github/NokTNL/Notes-NodeJS/30-express/30-file-serving/routes/shop.js
  //      - Note that this is a *URL* and NOT a valid NodeJS path name. Just use the `fileURLToPath` function to transform it into a valid one (this will also take into account different OS's path encoding): fileURLToPath(import.meta.url)
  // - Another issue is that you need to refer to a file RELATIVE TO the current module. Easiest way will be to use the global `URL` class to concat a path string to a base URL you provide, then pass it to fileURLToPath.
  // See: https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/#help-im-missing-dirname, https://nodejs.org/api/url.html#urlfileurltopathurl
  res.sendFile(fileURLToPath(new URL("../views/shop.html", import.meta.url)));
});

export default router;
