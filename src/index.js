const http = require("http");
const app = require("./server");
require("dotenv").config();
const server = http.createServer(app);

server.listen(app.get("port"));
console.log("Server on port", app.get("port"));
