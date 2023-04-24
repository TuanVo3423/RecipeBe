const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();
const Router = require("./routes");

const PORT = process.env.PORT || 5000;

const URL = process.env.DATABASE_URL;

// add some middleware of express
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(cors());

Router(app);
// socket.io
const http = require("http");
// const { Server } = require("socket.io");
const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     // origin: [
//     //   "https://aqua-fe.vercel.app",
//     //   "https://aqua-admin-ochre.vercel.app",
//     // ],
//     credentials: true,
//     // origin: ["http://127.0.0.1:5173", "http://127.0.0.1:5174"],
//     methods: ["GET", "POST"],
//   },
// });

// let users = [];
// io.on("connection", (socket) => {
//   socket.on("joinRoom", (idProduct) => {
//     const user = { userID: socket.id, room: idProduct };
//     const check = users.every((user) => user.userID !== socket.id);
//     if (check) {
//       users.push(user);
//       socket.join(user.room);
//     } else {
//       users.map((user) => {
//         if (user.userID === socket.id) {
//           if (user.room !== idProduct) {
//             socket.leave(user.room);
//             socket.join(idProduct);
//             users.room = idProduct;
//           }
//         }
//       });
//     }
//   });
//   let chatCount = [];
//   socket.on("joinChat", async (userID) => {
//     const user = { userID: socket.id, room: userID };
//     console.log(user);
//     const check = chatCount.every((user) => user.userID !== socket.id);
//     if (check) {
//       chatCount.push(user);
//       socket.join(user.room);
//     } else {
//       if (user.userID === socket.id) {
//         if (user.room !== userID) {
//           socket.leave(user.room);
//           socket.join(userID);
//           chatCount.room = userID;
//         }
//       }
//     }
//   });
//   socket.on("createChat", async (msg) => {
//     const { userID, content, userName, createdAt } = msg;
//     const newChat = new chatModel({
//       userID,
//       userName,
//       content,
//       createdAt,
//     });
//     await newChat.save();
//     io.to(msg.userID).emit("sendChatToClient", msg);
//   });

//   socket.on("createComment", async (msg) => {
//     const { userID, content, idDetail, userName, createdAt } = msg;
//     const newComment = new CommentModel({
//       userID,
//       createdAt,
//       userName,
//       content,
//       productID: idDetail,
//     });
//     await newComment.save();
//     io.to(msg.idDetail).emit("sendCommentToClient", msg);
//   });
//   socket.on("disconnect", () => {
//     // console.log("user disconnected");
//   });
// });
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(PORT, function () {
      console.log("Listening on port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
