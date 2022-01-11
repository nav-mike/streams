import { FC, useEffect } from "react";
import {
  Tab,
  Flex,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Stack,
  Button,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  VStack,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { RiUserFill } from "react-icons/ri";
import "emoji-mart/css/emoji-mart.css";
import ChatMessage from "./ChatMessage";
import { DateTime } from "luxon";
import PinnedChatMessage from "./PinnedChatMessage";
import useChannel from "../../hooks/useChannel";
import MessageInputForm from "./MessageInputForm";
import ChatMessageModel from "../../models/ChatMessage";

interface IOpenChatProps {
  toggle: () => void;
}

export const FAKE_MESSAGES: ChatMessageModel[] = [
  {
    author: "Jaxson Bator",
    authorAvatar: "https://bit.ly/code-beast",
    message:
      "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
    createdAt: DateTime.now().plus({ minutes: -2 }),
  },
  {
    author: "Kent Dodds",
    authorAvatar: "https://bit.ly/kent-c-dodds",
    message:
      "programming the firewall won't do anything, we need to index the primary PCI panel!",
    createdAt: DateTime.now().plus({ minutes: -1 }),
  },
  {
    author: "Jaxson Bator",
    authorAvatar: "https://bit.ly/code-beast",
    message:
      "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
    createdAt: DateTime.now().plus({ minutes: -2 }),
  },
  {
    author: "Kent Dodds",
    authorAvatar: "https://bit.ly/kent-c-dodds",
    message:
      "programming the firewall won't do anything, we need to index the primary PCI panel!",
    createdAt: DateTime.now().plus({ minutes: -1 }),
  },
  {
    author: "Jaxson Bator",
    authorAvatar: "https://bit.ly/code-beast",
    message:
      "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
    createdAt: DateTime.now().plus({ minutes: -2 }),
  },
  {
    author: "Kent Dodds",
    authorAvatar: "https://bit.ly/kent-c-dodds",
    message:
      "programming the firewall won't do anything, we need to index the primary PCI panel!",
    createdAt: DateTime.now().plus({ minutes: -1 }),
  },
  {
    author: "Jaxson Bator",
    authorAvatar: "https://bit.ly/code-beast",
    message:
      "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
    createdAt: DateTime.now().plus({ minutes: -2 }),
  },
  {
    author: "Kent Dodds",
    authorAvatar: "https://bit.ly/kent-c-dodds",
    message:
      "programming the firewall won't do anything, we need to index the primary PCI panel!",
    createdAt: DateTime.now().plus({ minutes: -1 }),
  },
  {
    author: "Jaxson Bator",
    authorAvatar: "https://bit.ly/code-beast",
    message:
      "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
    createdAt: DateTime.now().plus({ minutes: -2 }),
  },
  {
    author: "Kent Dodds",
    authorAvatar: "https://bit.ly/kent-c-dodds",
    message:
      "programming the firewall won't do anything, we need to index the primary PCI panel!",
    createdAt: DateTime.now().plus({ minutes: -1 }),
  },
  {
    author: "Jaxson Bator",
    authorAvatar: "https://bit.ly/code-beast",
    message:
      "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
    createdAt: DateTime.now().plus({ minutes: -2 }),
  },
  {
    author: "Kent Dodds",
    authorAvatar: "https://bit.ly/kent-c-dodds",
    message:
      "programming the firewall won't do anything, we need to index the primary PCI panel!",
    createdAt: DateTime.now().plus({ minutes: -1 }),
  },
  {
    author: "Jaxson Bator",
    authorAvatar: "https://bit.ly/code-beast",
    message:
      "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
    createdAt: DateTime.now().plus({ minutes: -2 }),
  },
  {
    author: "Kent Dodds",
    authorAvatar: "https://bit.ly/kent-c-dodds",
    message:
      "programming the firewall won't do anything, we need to index the primary PCI panel!",
    createdAt: DateTime.now().plus({ minutes: -1 }),
    authorStatus: "moderator",
  },
  {
    author: "Jaxson Bator",
    authorAvatar: "https://bit.ly/code-beast",
    message:
      "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
    createdAt: DateTime.now().plus({ minutes: -2 }),
    authorStatus: "admin",
  },
];

const OpenChat: FC<IOpenChatProps> = ({ toggle }) => {
  const chatChannel = useChannel("room:lobby");

  useEffect(() => {
    if (!chatChannel) return;

    chatChannel.push("ping", {});
  });

  useEffect(() => {
    if (!chatChannel) return;

    chatChannel.on("new_msg", (payload: any) => {
      console.log("New message", payload);
    });

    return () => {
      chatChannel.off();
    };
  }, [chatChannel]);

  const onSendMessage = (message: string) => {
    console.log(chatChannel);
    if (message.trim() !== "" && chatChannel) {
      chatChannel.push("new_msg", {
        body: { message: message },
      });
    }
  };

  return (
    <Flex
      direction="column"
      w="56px"
      maxW="320px"
      minW="320px"
      alignItems="flex-start"
    >
      <HStack w="full" paddingRight="8px">
        <IconButton
          aria-label="Show chat"
          color="blue.500"
          w="40px"
          h="40px"
          m="8px"
          onClick={toggle}
          icon={<Icon as={BsChevronRight} />}
        />
        <Spacer />
        <Stack direction={"row"} spacing={4}>
          <Button leftIcon={<Icon as={RiUserFill} />} color={"blue.500"}>
            1428
          </Button>
        </Stack>
      </HStack>
      <Tabs flex="1" w="full" align={"center"} isFitted>
        <TabList>
          <Tab>Global</Tab>
          <Tab>DM</Tab>
          <Tab>Q&A</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <VStack>
              <VStack flex={"1"} flexDirection={"column"} w={"full"} p={1}>
                <PinnedChatMessage
                  author={"Kent Dodds"}
                  authorAvatar={"https://bit.ly/kent-c-dodds"}
                  message={
                    "programming the firewall won't do anything, we need to index the primary PCI panel!"
                  }
                  createdAt={DateTime.now().plus({ minutes: -1 })}
                />
                <VStack h={"calc(100vh - 56px - 42px - 84px - 120px)"}>
                  <VStack flexDirection={"column-reverse"} overflowY={"scroll"}>
                    {FAKE_MESSAGES.map((message, index) => (
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
              </VStack>
              <MessageInputForm onSubmit={onSendMessage} />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default OpenChat;
