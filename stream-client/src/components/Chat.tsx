import { FC } from "react";
import { Flex, Icon, IconButton, useBoolean } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CgHomeAlt } from "react-icons/cg";
import { IoChatbubblesOutline, IoPaperPlaneOutline } from "react-icons/io5";
import OpenChat from "./OpenChat";
import HideChat from "./HideChat";

const Chat: FC = () => {
  const [isOpenChat, setIsOpenChat] = useBoolean();

  if (!isOpenChat) return <HideChat toggle={setIsOpenChat.toggle} />;

  return <OpenChat toggle={setIsOpenChat.toggle} />;
};

export default Chat;
