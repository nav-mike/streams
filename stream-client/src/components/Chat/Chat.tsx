import { FC } from "react";
import { useBoolean } from "@chakra-ui/react";
import OpenChat from "./OpenChat";
import HideChat from "./HideChat";

const Chat: FC = () => {
  const [isOpenChat, setIsOpenChat] = useBoolean(true);

  if (!isOpenChat) return <HideChat toggle={setIsOpenChat.toggle} />;

  return <OpenChat toggle={setIsOpenChat.toggle} />;
};

export default Chat;
