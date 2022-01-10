import { createContext, FC, useEffect, useState } from "react";
// @ts-ignore
import { Socket } from "phoenix";

const SocketContext = createContext<{ socket: any } | null>(null);

const SocketProvider: FC = (props) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = new Socket<{}>("ws://localhost:4000/socket");
    socket.connect();
    setSocket(socket);
    console.log("Socket connected");
  }, []);

  if (!socket) return null;

  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
