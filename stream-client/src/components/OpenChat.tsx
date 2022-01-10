import {
  ChangeEvent,
  KeyboardEvent,
  FC,
  useRef,
  useState,
  CSSProperties,
} from "react";
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
  FormControl,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  useBoolean,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { RiUserFill } from "react-icons/ri";
import { CgSmile } from "react-icons/cg";
import { TiFlash } from "react-icons/ti";
import { EmojiData, Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import ChatMessage from "./ChatMessage";
import { GoArrowRight } from "react-icons/all";
import { DateTime } from "luxon";
import PinnedChatMessage from "./PinnedChatMessage";

interface IOpenChatProps {
  toggle: () => void;
}

const defaultPickerStyles: CSSProperties = {
  position: "absolute",
  bottom: "20px",
  right: "20px",
  zIndex: 1000,
};

const MAX_MESSAGE_SIZE = 280;

const OpenChat: FC<IOpenChatProps> = ({ toggle }) => {
  const bg = useColorModeValue("gray.100", "WhiteAlpha.50");
  const emojiPickerTheme = useColorModeValue("light", "dark");

  const [isShowPicker, setIsShowPicker] = useBoolean(false);
  const [message, setMessage] = useState("");
  const [messageSize, setMessageSize] = useState(0);

  const inputFile = useRef<HTMLInputElement>(null);
  const emojiPicker = useRef<Picker>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);

  const onAddFileClickHandle = () => {
    inputFile?.current?.click();
  };

  const updateMessageHandler = (value: string) => {
    if (messageSize > MAX_MESSAGE_SIZE) return;

    setMessage(value);
    setMessageSize(value.length);
  };

  const onSendMessage = () => {
    if (message.trim() !== "") {
      console.log(message);
      updateMessageHandler("");
    }
  };

  const onMessageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateMessageHandler(e.target.value);
  };

  const onMessageKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      onSendMessage();
    }
  };

  const onSelectEmojiHandle = (emoji: EmojiData) => {
    console.log(emoji);

    setMessage((prev) => {
      if (messageSize > MAX_MESSAGE_SIZE) return prev;

      const emojiValue = "native" in emoji ? emoji.native : emoji.colons || "";

      setMessageSize((prev) => prev + emojiValue.length);
      return `${prev}${emojiValue}`;
    });

    setIsShowPicker.off();
    messageInputRef?.current?.focus();
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
                    <ChatMessage
                      author={"Jaxson Bator"}
                      authorAvatar={"https://bit.ly/code-beast"}
                      message={
                        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -2 })}
                    />
                    <ChatMessage
                      author={"Kent Dodds"}
                      authorAvatar={"https://bit.ly/kent-c-dodds"}
                      message={
                        "programming the firewall won't do anything, we need to index the primary PCI panel!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -1 })}
                    />
                    <ChatMessage
                      author={"Jaxson Bator"}
                      authorAvatar={"https://bit.ly/code-beast"}
                      message={
                        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -2 })}
                    />
                    <ChatMessage
                      author={"Kent Dodds"}
                      authorAvatar={"https://bit.ly/kent-c-dodds"}
                      message={
                        "programming the firewall won't do anything, we need to index the primary PCI panel!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -1 })}
                    />
                    <ChatMessage
                      author={"Jaxson Bator"}
                      authorAvatar={"https://bit.ly/code-beast"}
                      message={
                        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -2 })}
                    />
                    <ChatMessage
                      author={"Kent Dodds"}
                      authorAvatar={"https://bit.ly/kent-c-dodds"}
                      message={
                        "programming the firewall won't do anything, we need to index the primary PCI panel!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -1 })}
                    />
                    <ChatMessage
                      author={"Jaxson Bator"}
                      authorAvatar={"https://bit.ly/code-beast"}
                      message={
                        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -2 })}
                      pinned={false}
                      booked={true}
                    />
                    <ChatMessage
                      author={"Kent Dodds"}
                      authorAvatar={"https://bit.ly/kent-c-dodds"}
                      message={
                        "programming the firewall won't do anything, we need to index the primary PCI panel!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -1 })}
                      pinned={false}
                      booked={false}
                    />
                    <ChatMessage
                      author={"Jaxson Bator"}
                      authorAvatar={"https://bit.ly/code-beast"}
                      message={
                        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -2 })}
                      pinned={false}
                      booked={true}
                    />
                    <ChatMessage
                      author={"Kent Dodds"}
                      authorAvatar={"https://bit.ly/kent-c-dodds"}
                      message={
                        "programming the firewall won't do anything, we need to index the primary PCI panel!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -1 })}
                      pinned={false}
                      booked={false}
                    />
                    <ChatMessage
                      author={"Jaxson Bator"}
                      authorAvatar={"https://bit.ly/code-beast"}
                      message={
                        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -2 })}
                      pinned={false}
                      booked={true}
                    />
                    <ChatMessage
                      author={"Kent Dodds"}
                      authorAvatar={"https://bit.ly/kent-c-dodds"}
                      message={
                        "programming the firewall won't do anything, we need to index the primary PCI panel!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -1 })}
                      pinned={false}
                      booked={false}
                    />
                    <ChatMessage
                      author={"Jaxson Bator"}
                      authorAvatar={"https://bit.ly/code-beast"}
                      message={
                        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -2 })}
                      pinned={false}
                      booked={true}
                    />
                    <ChatMessage
                      author={"Kent Dodds"}
                      authorAvatar={"https://bit.ly/kent-c-dodds"}
                      message={
                        "programming the firewall won't do anything, we need to index the primary PCI panel!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -1 })}
                      authorStatus={"moderator"}
                      pinned={false}
                      booked={false}
                    />
                    <ChatMessage
                      author={"Jaxson Bator"}
                      authorAvatar={"https://bit.ly/code-beast"}
                      message={
                        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!"
                      }
                      createdAt={DateTime.now().plus({ minutes: -2 })}
                      pinned={false}
                      authorStatus={"admin"}
                      booked={true}
                    />
                  </VStack>
                </VStack>
              </VStack>
              <HStack paddingBottom={3}>
                <FormControl flex={1} w={"full"}>
                  <InputGroup>
                    <Input
                      type={"text"}
                      placeholder={"Say something"}
                      borderRadius={"8px"}
                      value={message}
                      onChange={onMessageChangeHandler}
                      onKeyDown={onMessageKeyDownHandler}
                      ref={messageInputRef}
                      w={"256px"}
                      fontSize={"sm"}
                      pr={"4rem"}
                    />
                    <InputRightElement w={"4rem"}>
                      <IconButton
                        aria-label="Emojis"
                        bg={bg}
                        onClick={onAddFileClickHandle}
                        icon={<Icon as={TiFlash} />}
                        size={"sm"}
                      />
                      <IconButton
                        aria-label="Attach"
                        bg={bg}
                        onClick={setIsShowPicker.toggle}
                        icon={<Icon as={CgSmile} />}
                        size={"sm"}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <input
                    type={"file"}
                    id={"file"}
                    ref={inputFile}
                    accept={".jpg, .jpeg, .png, .gif"}
                    style={{ display: "none" }}
                  />
                </FormControl>
                <FormControl w={"40px"}>
                  <IconButton
                    aria-label={"Send"}
                    onClick={onSendMessage}
                    icon={<Icon as={GoArrowRight} />}
                  />
                </FormControl>
                {isShowPicker && (
                  <Picker
                    style={defaultPickerStyles}
                    theme={emojiPickerTheme}
                    ref={emojiPicker}
                    onSelect={onSelectEmojiHandle}
                  />
                )}
              </HStack>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default OpenChat;
