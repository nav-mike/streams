import {
  ChangeEvent,
  CSSProperties,
  FC,
  KeyboardEvent,
  useRef,
  useState,
} from "react";
import {
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useBoolean,
  useColorModeValue,
} from "@chakra-ui/react";
import { TiFlash } from "react-icons/ti";
import { CgSmile } from "react-icons/cg";
import { GoArrowRight } from "react-icons/go";
import { EmojiData, Picker } from "emoji-mart";
import ChatCommandList from "./Commands/ChatCommandList";

const defaultPickerStyles: CSSProperties = {
  position: "absolute",
  bottom: "20px",
  right: "20px",
  zIndex: 1000,
};

const MAX_MESSAGE_SIZE = 280;

interface IMessageInputFormProps {
  onSubmit: (message: string) => void;
}

const MessageInputForm: FC<IMessageInputFormProps> = (props) => {
  const bg = useColorModeValue("gray.100", "WhiteAlpha.50");
  const emojiPickerTheme = useColorModeValue("light", "dark");

  const [message, setMessage] = useState("");
  const [messageSize, setMessageSize] = useState(0);
  const [isShowPicker, setIsShowPicker] = useBoolean(false);
  const [isShowCommands, setIsShowCommands] = useBoolean(false);

  const messageInputRef = useRef<HTMLInputElement>(null);
  const emojiPicker = useRef<Picker>(null);

  const updateMessageHandler = (value: string) => {
    if (messageSize > MAX_MESSAGE_SIZE) return;

    setMessage(value);
    setMessageSize(value.length);
  };

  const onMessageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateMessageHandler(e.target.value);
  };

  const onMessageKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      props.onSubmit(message);
      updateMessageHandler("");
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

  const onAddCommandToMessage = (command: string) => {
    setMessage(`${command} `);
    setIsShowCommands.off();
    messageInputRef?.current?.focus();
  };

  return (
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
              aria-label="Commands Matching Dialog"
              bg={bg}
              onClick={setIsShowCommands.toggle}
              icon={<Icon as={TiFlash} />}
              size={"sm"}
            />
            <IconButton
              aria-label="Emojis picker"
              bg={bg}
              onClick={setIsShowPicker.toggle}
              icon={<Icon as={CgSmile} />}
              size={"sm"}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl w={"40px"}>
        <IconButton
          aria-label={"Send"}
          onClick={() => {
            props.onSubmit(message);
            updateMessageHandler("");
          }}
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
      {isShowCommands && <ChatCommandList onClick={onAddCommandToMessage} />}
    </HStack>
  );
};

export default MessageInputForm;
