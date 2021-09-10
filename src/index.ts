import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import serverless from "serverless-http";

const app = express();

// const messages = [];

app.use(express.static("client"));

const router = express.Router();
router.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from Express.js!</h1>");
  res.end();
});
router.get("/chats", (req, res) => res.redirect("/chats.html"));
router.post("/", (req, res) => res.json({ postBody: req.body }));

app.use("/.netlify/functions/server", router);

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
