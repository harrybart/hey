import express from "express";
import serverless from "serverless-http";
import { join } from "path";
import { readFile } from "fs";

const app = express();

const router = express.Router();
router.get("/", (_req, res) => {
  readFile(join(__dirname, "/client/index.html"), (_err, data) => {
    if (data) {
      res.write(data);
    }
  });
  res.end();
});
router.get("/another", (req, res) => res.json({ route: req.originalUrl }));
router.post("/", (req, res) => res.json({ postBody: req.body }));

app.use("/.netlify/functions/server", router); // path must route to lambda
app.use("/", (_req, res) => res.sendFile(join(__dirname, "../index.html")));

module.exports = app;
module.exports.handler = serverless(app);
