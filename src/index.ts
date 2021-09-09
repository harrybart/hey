import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

const app = express();

const httpServer = createServer(app);

const webSocket = new Server(httpServer);

webSocket.on("connection", () => {
  console.log("Websocket connected");
});

httpServer.listen(3000, () => {
  console.log("Webserver started");
});
