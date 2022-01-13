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
import { DateTime } from "luxon";
import AnnounceMessage from "./AnnounceMessage";
import useChannel from "../../hooks/useChannel";
import MessageInputForm from "./MessageInputForm";
import MessagesList from "./MessagesList";
import { useAppDispatch } from "../../store/hooks";
import { NewGlobalMessage } from "../../store/actions/globalChatMessages";

interface IOpenChatProps {
  toggle: () => void;
}

const OpenChat: FC<IOpenChatProps> = ({ toggle }) => {
  const chatChannel = useChannel("room:lobby");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!chatChannel) return;

    chatChannel.push("ping", {});
  });

  useEffect(() => {
    if (!chatChannel) return;

    chatChannel.on(
      "new_msg",
      (payload: {
        body: {
          author: string;
          message: string;
          createdAt: string;
          authorAvatar: string;
          authorStatus?: string;
          pinned?: boolean;
          booked?: boolean;
        };
      }) => {
        console.log("New message", {
          ...payload.body,
          createdAt: DateTime.fromISO(payload.body.createdAt),
        });
        dispatch(
          NewGlobalMessage({
            ...payload.body,
            createdAt: DateTime.fromISO(payload.body.createdAt),
          })
        );
      }
    );

    return () => {
      chatChannel.off();
    };
  }, [chatChannel]);

  const onSendMessage = (message: string) => {
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
                <AnnounceMessage
                  author={"Kent Dodds"}
                  authorAvatar={"https://bit.ly/kent-c-dodds"}
                  message={
                    "programming the firewall won't do anything, we need to index the primary PCI panel!"
                  }
                  createdAt={DateTime.now().plus({ minutes: -1 })}
                />
                <MessagesList hasAnnounce={true} />
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
