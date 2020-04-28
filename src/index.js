const http = require("http");
const app = require("./server");
const server = http.createServer(app);

server.listen(3000);
console.log("Server on port", 3000);
