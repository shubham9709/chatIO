import express from "express";
import chats from "./Data/data.js";
import cors from "cors";

const app = express();
app.use(cors());
app.get("/", function (req, res) {
  res.send("API is up and running");
});

app.get("/api/chats", function (req, res) {
  res.send(chats);
});

app.get("/chats/:id", function (req, res) {
  const singleChat = chats.find((c) => c._id === req.params.id);
  console.log(req.params.id);
  res.send(singleChat);
});

app.listen(7000, function () {
  console.log("Server started on port 7000");
});
