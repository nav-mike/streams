import { FC } from "react";
import { Box } from "@chakra-ui/react";
import ChatMessage, { IChatMessageProps } from "./ChatMessage";
import ChatMessageModel from "../../models/ChatMessage";

const AnnounceMessage: FC<ChatMessageModel & IChatMessageProps> = (props) => {
  return (
    <Box boxShadow={"dark-lg"} p={3} paddingBottom={9}>
      <ChatMessage {...props} pinned={true} />
    </Box>
  );
};

export default AnnounceMessage;
