import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import serverless from "serverless-http";

const app = express();

// const messages = [];

app.use(express.static("client"));

app.use("/", (_req, res) => {
  res.render("chats");
});

app.use("/chats", (_req, res) => res.redirect("/chats.html"));

const httpServer = createServer(app);

const webSocket = new Server(httpServer, {
  serveClient: true,
});

webSocket.on("connection", (socket) => {
  console.log("Websocket connected", socket.id);
});

// httpServer.listen(3000, () => {
//   console.log("Webserver started");
// });

module.exports = app;
module.exports.handler = serverless(app);
