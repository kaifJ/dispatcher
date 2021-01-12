const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");
const connectDB = require("./config/db");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

console.log(path.join(__dirname, "src", "public"));

let env = process.env.NODE_ENV || "development";
connectDB(env);

app.use(express.json({ extended: false }));
app.use("/api/user", require("./src/routes/user"));
app.use(express.static(path.join(__dirname, "src", "public")));

let users = {};

io.on("connection", socket => {
  socket.on("userData", ({ number }) => {
    Object.assign(users, {
      [number]: socket
    });
  });

  socket.on("sendMessage", ({ message }, callback) => {
    console.log(message);
    callback("Received By Server");
  });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
