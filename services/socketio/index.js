import { io } from "socket.io-client";

const lobbySocket = io("http://localhost:5001");
const gameSocket = io("http://localhost:5004");

export { lobbySocket, gameSocket };
