import { voiceSocket } from "..";

const socket = voiceSocket;
export const joinVoiceLobby = ({ lid, uid }) => {
  socket.emit("JOIN", { lid, uid });
};

export const leaveVoiceLobby = ({ lid, uid }) => {
  socket.emit("LEAVE", { lid, uid });
};
