import { FC } from "react";
import { IconType } from "react-icons";
import {
  HStack,
  Icon,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

interface IChatCommandItemProps {
  icon: IconType;
  label: string;
  example: string;
  command: string;

  onClick?: (command: string) => void;
}

const ChatCommandItem: FC<IChatCommandItemProps> = (props) => {
  const bg = useColorModeValue("gray.300", "gray.600");

  return (
    <HStack
      w={"100%"}
      onClick={() => {
        if (props.onClick) {
          props.onClick(`${props.command} `);
        }
      }}
      _hover={{
        cursor: "pointer",
        backgroundColor: bg,
        borderRadius: "3px",
      }}
    >
      <Icon
        as={props.icon}
        color={"white"}
        borderRadius={"16px"}
        bg={"blue.500"}
        w={6}
        h={6}
        padding={1}
      />
      <Heading as={"h6"} size={"xs"}>
        {props.label}
      </Heading>
      {props.example && (
        <Text fontSize="xs" as={"kbd"} color="gray.500">
          {props.example}
        </Text>
      )}
    </HStack>
  );
};

export default ChatCommandItem;
