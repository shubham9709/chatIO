import express from "express";
import chats from "./Data/data.js";
import cors from "cors";
import Connection from "./database/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

Connection();
app.get("/", function (req, res) {
  res.send("API is up and running");
});

app.use("/api/user", userRoutes);
// app.get("/api/user", (req, res) => {
//   res.send("Hello");
// });

app.listen(7000, function () {
  console.log("Server started on port 7000");
});
