import { FC } from "react";
import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { BsChevronLeft } from "react-icons/bs";
import { CgHomeAlt } from "react-icons/cg";
import { IoChatbubblesOutline, IoPaperPlaneOutline } from "react-icons/io5";

interface IHideChatProps {
  toggle: () => void;
}

const HideChat: FC<IHideChatProps> = ({ toggle }) => {
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
        onClick={toggle}
        icon={<Icon as={BsChevronLeft} />}
      />
      <IconButton
        aria-label="Global"
        w="40px"
        h="40px"
        m="8px"
        icon={<Icon as={CgHomeAlt} />}
      />
      <IconButton
        aria-label="DM"
        w="40px"
        h="40px"
        m="8px"
        icon={<Icon as={IoPaperPlaneOutline} />}
      />
      <IconButton
        aria-label="Q&A"
        w="40px"
        h="40px"
        m="8px"
        icon={<Icon as={IoChatbubblesOutline} />}
      />
    </Flex>
  );
};

export default HideChat;
