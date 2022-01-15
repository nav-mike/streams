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
  useBoolean,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { RiUserFill } from "react-icons/ri";
import "emoji-mart/css/emoji-mart.css";
import { DateTime } from "luxon";
import AnnounceMessage from "./AnnounceMessage";
import useChannel from "../../hooks/useChannel";
import MessageInputForm from "./MessageInputForm";
import MessagesList from "./MessagesList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { NewGlobalMessage } from "../../store/actions/globalChatMessages";
import ChatMessage, { IChatMessage } from "../../models/ChatMessage";
import { NewAnnouncementMessage } from "../../store/actions/announceMessage";

interface IOpenChatProps {
  toggle: () => void;
}

const OpenChat: FC<IOpenChatProps> = ({ toggle }) => {
  const chatChannel = useChannel("room:lobby");
  const dispatch = useAppDispatch();

  const announce: ChatMessage | undefined = useAppSelector<{
    message?: ChatMessage;
  }>((state) => state.announceMessage)?.message;

  useEffect(() => {
    if (!chatChannel) return;

    chatChannel.push("ping", {});
  });

  useEffect(() => {
    if (!chatChannel) return;

    chatChannel.on("new_msg", (payload: { body: IChatMessage }) => {
      dispatch(
        NewGlobalMessage({
          ...payload.body,
          createdAt: DateTime.fromISO(payload.body.createdAt),
        })
      );
    });

    chatChannel.on("new_anno", (payload: { body: IChatMessage }) => {
      dispatch(
        NewAnnouncementMessage({
          ...payload.body,
          createdAt: DateTime.fromISO(payload.body.createdAt),
        })
      );
    });

    return () => {
      chatChannel.off();
    };
  }, [chatChannel]);

  const sendMessageHandler = (message: string) => {
    if (message.trim() !== "" && chatChannel) {
      chatChannel.push("new_msg", {
        body: { message: message },
      });
    }
  };

  const clearAnnounceHandler = () => {
    dispatch(NewAnnouncementMessage(undefined));
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
                {announce && (
                  <AnnounceMessage
                    {...announce}
                    onClick={clearAnnounceHandler}
                  />
                )}
                <MessagesList hasAnnounce={announce !== undefined} />
              </VStack>
              <MessageInputForm onSubmit={sendMessageHandler} />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default OpenChat;
