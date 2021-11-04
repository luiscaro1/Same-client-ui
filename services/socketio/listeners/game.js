import { gameSocket } from "..";

const socket = gameSocket;

export const listenForNewLobby = (cb) => {
  socket.on("NEW_LOBBY", () => cb());
};
