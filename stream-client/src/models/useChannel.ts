import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/SocketContext";

const useChannel = (channelName: string) => {
  const [channel, setChannel] = useState<any | null>(null);
  const socketCtx = useContext(SocketContext);

  useEffect(() => {
    if (socketCtx?.socket) {
      const phxChannel = socketCtx.socket.channel(channelName);

      phxChannel.join().receive("ok", () => {
        setChannel(phxChannel);
      });

      return () => {
        phxChannel.leave();
      };
    }
  }, []);

  return channel;
};

export default useChannel;
