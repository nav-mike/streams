import { FC } from "react";
import {
  HStack,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { TiFlash } from "react-icons/ti";
import ChatCommandItem from "./ChatCommandItem";
import { FiUserPlus, FiUserX } from "react-icons/fi";
import { HiFlag } from "react-icons/hi";
import { AiOutlineFileGif } from "react-icons/ai";
import { SiImgur } from "react-icons/si";
import { GoMute, GoUnmute } from "react-icons/go";

interface IChatCommandList {
  onClick: (command: string) => void;
}

const ChatCommandList: FC<IChatCommandList> = (props) => {
  const commandsBg = useColorModeValue("gray.100", "gray.700");

  return (
    <VStack
      bg={commandsBg}
      position={"absolute"}
      bottom={"65px"}
      right={"35px"}
      zIndex={1000}
      alignItems={"flex-start"}
      borderRadius={"8px"}
      p={2}
    >
      <HStack>
        <Icon as={TiFlash} color={"blue.500"} />
        <Text color={"gray.500"}>Commands Matching</Text>
      </HStack>
      <ChatCommandItem
        icon={FiUserX}
        label={"Ban"}
        example={"/ban [@username] [text]"}
        command={"/ban"}
        onClick={props.onClick}
      />
      <ChatCommandItem
        icon={FiUserPlus}
        label={"Unban"}
        example={"/unban [@username]"}
        command={"/unban"}
        onClick={props.onClick}
      />
      <ChatCommandItem
        icon={HiFlag}
        label={"Flag"}
        example={"/flag [@username]"}
        command={"/flag"}
        onClick={props.onClick}
      />
      <ChatCommandItem
        icon={AiOutlineFileGif}
        label={"Giphy"}
        example={"/giphy [query]"}
        command={"/giphy"}
        onClick={props.onClick}
      />
      <ChatCommandItem
        icon={SiImgur}
        label={"Imgur"}
        example={"/imgur [query]"}
        command={"/imgur"}
        onClick={props.onClick}
      />
      <ChatCommandItem
        icon={GoMute}
        label={"Mute"}
        example={"/mute [@username]"}
        command={"/mute"}
        onClick={props.onClick}
      />
      <ChatCommandItem
        icon={GoUnmute}
        label={"Unmute"}
        example={"/unmute [@username]"}
        command={"/unmute"}
        onClick={props.onClick}
      />
    </VStack>
  );
};

export default ChatCommandList;
