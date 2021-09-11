"use strict";

const app = require("./dist/index.js");
const http = require("http");
const { Server } = require("socket.io");

const httpServer = http.createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log(socket.id);
});

app.listen(3000, () => console.log("Local app listening on port 3000!"));
