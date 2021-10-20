import { io } from "socket.io-client";

const lobbySocket = io(process.env.CHAT_URL);
const gameSocket = io(process.env.GAME_URL);

export { lobbySocket, gameSocket };
