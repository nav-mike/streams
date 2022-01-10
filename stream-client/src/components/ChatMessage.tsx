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
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import { HiFlag } from "react-icons/hi";
import { RiPushpinFill } from "react-icons/ri";

export interface IChatMessageProps {
  author: string;
  authorStatus?: string;
  authorAvatar: string;
  message: string;
  createdAt: DateTime;
  pinned?: boolean;
  booked?: boolean;
}

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

const ChatMessage: FC<IChatMessageProps> = (props) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const timeColor = useColorModeValue("gray.500", "gray.600");

  return (
    <HStack
      h={"84px"}
      alignItems={"flex-start"}
      _hover={{ backgroundColor: bg, cursor: "pointer" }}
      w={"full"}
      p={0}
    >
      <Avatar size={"sm"} name={props.author} src={props.authorAvatar} />
      <VStack alignItems={"flex-start"}>
        <HStack>
          <Text fontSize={"14px"}>{props.author}</Text>
          <Text fontSize={"xs"} color={timeColor}>
            {timeAgo(props.createdAt)}
          </Text>
          {props.authorStatus && <Badge>{props.authorStatus}</Badge>}
          {props.booked && <Icon as={HiFlag} color={"red"} />}
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
