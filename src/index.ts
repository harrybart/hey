import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

const app = express();

// const messages = [];

app.use(express.static("client"));

app.get("/", (_req, res) => {
  res.render("index");
});

const httpServer = createServer(app);

const webSocket = new Server(httpServer, {
  serveClient: true,
});

webSocket.on("connection", (socket) => {
  console.log("Websocket connected", socket.id);
});

httpServer.listen(3000, () => {
  console.log("Webserver started");
});
