import { lobbySocket } from "..";

const socket = lobbySocket;
export const joinLobby = (lid) => {
  socket.emit("JOIN", lid);
};
