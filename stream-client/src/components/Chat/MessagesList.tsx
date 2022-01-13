import { FC } from "react";
import ChatMessageModel from "../../models/ChatMessage";
import { useAppSelector } from "../../store/hooks";
import { VStack } from "@chakra-ui/react";
import ChatMessage from "./ChatMessage";

interface IMessageListProps {
  hasAnnounce?: boolean;
}

const MessagesList: FC<IMessageListProps> = ({ hasAnnounce }) => {
  const messages: ChatMessageModel[] = useAppSelector<{
    messages: ChatMessageModel[];
  }>((state) => state.globalChatMessages).messages;

  return (
    <VStack
      h={`calc(100vh - 56px - 42px ${
        hasAnnounce ? "- 120px " : "+ 20px "
      }- 96px)`}
    >
      <VStack flexDirection={"column-reverse"} overflowY={"scroll"}>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            author={message.author}
            authorAvatar={message.authorAvatar}
            message={message.message}
            createdAt={message.createdAt}
            authorStatus={message.authorStatus}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default MessagesList;
