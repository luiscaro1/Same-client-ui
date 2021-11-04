import { io } from "socket.io-client";

const lobbySocket = io(process.env.NEXT_PUBLIC_CHAT_URL);
const gameSocket = io(process.env.NEXT_PUBLIC_GAME_URL);

export { lobbySocket, gameSocket };
