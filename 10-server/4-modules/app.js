// From Node v15, ES6 modules are fully supported. You can enable using ES6 globally by including `"type": "module"` in the closest `package.json`
// An ES6 module file can import from either a CommonJS module or an ES6 module
// !!! Note: you MUST specify the file extension `.js` as well, unless you use a transpiler. This is consistent with the standard ES6 behaviour in the browser. See: https://nodejs.org/api/esm.html#mandatory-file-extensions
import http from "http";
import { routeHandler } from "./routeHandler.js";

const server = http.createServer(routeHandler);

server.listen(3000);
