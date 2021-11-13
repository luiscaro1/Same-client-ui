import { lobbySocket } from "..";

const socket = lobbySocket;
export const listenToOnChatConnection = () => {
  socket.on("connect", () => {
    console.log("connected to chat");
  });
};

export const listenForMessage = (cb) => {
  socket.on("MESSAGE", (msg) => cb(msg));
};
