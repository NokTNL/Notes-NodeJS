import http from "http";
import { routeHandler } from "./routeHandler.js";

const server = http.createServer(routeHandler);

server.listen(3000);
