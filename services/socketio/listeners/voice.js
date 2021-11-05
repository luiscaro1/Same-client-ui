import { voiceSocket } from "..";

const socket = voiceSocket;
export const listenToOnVoiceConnection = () => {
  socket.on("connect", () => {
    console.log("connected to voice");
  });
};
export const listenToVoiceLobbyUpdates = (cb) => {
  socket.on("UPDATE_VOICE_LOBBY", () => {
    console.log("update");
    return cb();
  });
};
