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

export const listenToVoiceData = () => {
  socket.on("VOICE", (data) => {
    var audio = new Audio(data);
    audio.play();
  });
};
