import createSocket from "..";
const socket = createSocket("http://localhost:5004");

export const listenForNewLobby = (cb) => {
  socket.on("NEW_LOBBY", () => cb());
};
