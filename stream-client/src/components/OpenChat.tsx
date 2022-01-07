import { ChangeEvent, KeyboardEvent, FC, useRef, useState } from "react";
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

interface IOpenChatProps {
  toggle: () => void;
}

const defaultPickerStyles: React.CSSProperties = {
  position: "absolute",
  bottom: "20px",
  right: "20px",
  zIndex: 1000,
};

const OpenChat: FC<IOpenChatProps> = ({ toggle }) => {
  const bg = useColorModeValue("gray.100", "WhiteAlpha.50");
  const emojiPickerTheme = useColorModeValue("light", "dark");

  const [isShowPicker, setIsShowPicker] = useBoolean(false);
  const [message, setMessage] = useState("");

  const inputFile = useRef<HTMLInputElement>(null);
  const emojiPicker = useRef<Picker>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);

  const onAddFileClickHandle = () => {
    inputFile?.current?.click();
  };

  const onMessageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onMessageKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (message.trim() !== "") {
        console.log(message);
        setMessage("");
      }
    }
  };

  console.log(isShowPicker);

  const onSelectEmojiHandle = (emoji: EmojiData) => {
    console.log(emoji);

    setMessage((prev) => {
      const emojiValue = "native" in emoji ? emoji.native : emoji.colons;
      return `${prev} ${emojiValue} `;
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

        <TabPanels h={"full"}>
          <TabPanel h={"full"}>
            <VStack h={"full"}>
              <VStack flex={"1"}></VStack>
              <FormControl paddingBottom={10}>
                <InputGroup>
                  <Input
                    type={"text"}
                    placeholder={"Say something"}
                    borderRadius={"8px"}
                    value={message}
                    onChange={onMessageChangeHandler}
                    onKeyDown={onMessageKeyDownHandler}
                    ref={messageInputRef}
                  />
                  <InputRightElement w={"5rem"}>
                    <IconButton
                      aria-label="Emojis"
                      bg={bg}
                      onClick={onAddFileClickHandle}
                      icon={<Icon as={TiFlash} />}
                    />
                    <IconButton
                      aria-label="Attach"
                      bg={bg}
                      onClick={setIsShowPicker.toggle}
                      icon={<Icon as={CgSmile} />}
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
              <FormControl>
                {isShowPicker && (
                  <Picker
                    style={defaultPickerStyles}
                    theme={emojiPickerTheme}
                    ref={emojiPicker}
                    onSelect={onSelectEmojiHandle}
                  />
                )}
              </FormControl>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default OpenChat;
