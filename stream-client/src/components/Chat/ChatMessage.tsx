import { FC } from "react";
import {
  Avatar,
  Badge,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  VStack,
  Link,
  useBoolean,
  IconButton,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import { HiFlag } from "react-icons/hi";
import { RiPushpinFill } from "react-icons/ri";
import ChatMessageModel from "../../models/ChatMessage";

const units: Intl.RelativeTimeFormatUnit[] = [
  "year",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
];

const timeAgo = (dateTime: DateTime) => {
  const diff = dateTime.diffNow().shiftTo(...units);
  const unit = units.find((unit) => diff.get(unit) !== 0) || "second";

  const relativeFormatter = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });
  return relativeFormatter.format(Math.trunc(diff.as(unit)), unit);
};

const ChatMessage: FC<ChatMessageModel> = (props) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const timeColor = useColorModeValue("gray.500", "gray.600");
  const [isShowControls, setIsShowControls] = useBoolean(false);

  return (
    <HStack
      h={"84px"}
      alignItems={"flex-start"}
      _hover={{ backgroundColor: bg, cursor: "pointer" }}
      w={"full"}
      p={0}
      onMouseEnter={setIsShowControls.on}
      onMouseLeave={setIsShowControls.off}
    >
      <Avatar size={"sm"} name={props.author} src={props.authorAvatar} />
      <VStack alignItems={"flex-start"}>
        <HStack>
          <Text fontSize={"14px"}>{props.author}</Text>
          <Text fontSize={"xs"} color={timeColor}>
            {timeAgo(props.createdAt)}
          </Text>
          {props.authorStatus && <Badge>{props.authorStatus}</Badge>}
          {props.booked && !props.pinned && <Icon as={HiFlag} color={"red"} />}
          {isShowControls && (
            <IconButton
              aria-label={"Book the message"}
              isRound={false}
              size={"xs"}
              bg={bg}
              _hover={{ backgroundColor: bg }}
              icon={<Icon as={HiFlag} color={"gray.400"} />}
            />
          )}
          {props.pinned && <Icon as={RiPushpinFill} color={"gray.400"} />}
        </HStack>
        <Text fontSize={"12px"} align={"left"} paddingBottom={1}>
          {props.message}
        </Text>
        {props.pinned && (
          <Link
            href={"#"}
            color={"blue.400"}
            fontSize={"xs"}
            alignSelf={"flex-end"}
          >
            Read more
          </Link>
        )}
      </VStack>
    </HStack>
  );
};

export default ChatMessage;
