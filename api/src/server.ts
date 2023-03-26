import mongoose from "mongoose";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";

import app from "./app";

dotenv.config();

const port = process.env.PORT || 8000;

mongoose.set("strictQuery", false);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  // Handle socket events here

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    server.listen(port, () => {
      console.log("Server listening on port " + port);
    });
  })
  .catch((error: Error) => {
    console.log("MongoDB connection failed", error);
    process.exit(1);
  });
