import express from "express";
import serverless from "serverless-http";
import { join } from "path";

const app = express();

app.use(express.static(join(__dirname, "../client")));

const router = express.Router();
router.get("/", (_req, res) => {
  res.sendFile(join(__dirname, "../client/index.html"));
});
router.get("/chats", (_req, res) =>
  res.sendFile(join(__dirname, "../client/chats.html"))
);
router.post("/", (req, res) => res.json({ postBody: req.body }));

app.use("/.netlify/functions/server", router);

app.get("/chats", (_req, res) =>
  res.sendFile(join(__dirname, "../client/chats.html"))
);
app.use("/", (_req, res) =>
  res.sendFile(join(__dirname, "../client/index.html"))
);

const serverl = serverless(app);

module.exports = app;
module.exports.handler = serverl;
