import { FC } from "react";

interface IChatMessageProps {
  author: string;
  authorStatus?: string;
  authorAvatar: string;
  message: string;
  createdAt: string;
  pinned: boolean;
  booked: boolean;
}

const ChatMessage: FC = () => {
  return <p>Some message here</p>;
};

export default ChatMessage;
