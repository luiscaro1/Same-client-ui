import { io } from "socket.io-client";

const createSocket = (URL) => {
  return io(URL);
};

export default createSocket;
