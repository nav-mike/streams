import { FC } from "react";
import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { BsChevronLeft } from "react-icons/bs";
import { CgHomeAlt } from "react-icons/cg";
import { IoChatbubblesOutline, IoPaperPlaneOutline } from "react-icons/io5";

const Chat: FC = () => {
  return (
    <Flex
      direction="column"
      w="56px"
      maxW="56px"
      minW="56px"
      alignItems="center"
    >
      <IconButton
        aria-label="Show chat"
        color="blue.500"
        w="40px"
        h="40px"
        m="8px"
        icon={<Icon as={BsChevronLeft} />}
      />
      <IconButton
        aria-label="Some button"
        w="40px"
        h="40px"
        m="8px"
        icon={<Icon as={CgHomeAlt} />}
      />
      <IconButton
        aria-label="Paper plane"
        w="40px"
        h="40px"
        m="8px"
        icon={<Icon as={IoPaperPlaneOutline} />}
      />
      <IconButton
        aria-label="Show chat"
        w="40px"
        h="40px"
        m="8px"
        icon={<Icon as={IoChatbubblesOutline} />}
      />
    </Flex>
  );
};

export default Chat;
