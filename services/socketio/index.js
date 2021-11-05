import { io } from "socket.io-client";

const lobbySocket = io(process.env.NEXT_PUBLIC_CHAT_URL);
const gameSocket = io(process.env.NEXT_PUBLIC_GAME_URL);
const voiceSocket = io(process.env.NEXT_PUBLIC_VOICE_URL);

export { lobbySocket, gameSocket, voiceSocket };
