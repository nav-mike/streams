import { FC } from "react";
import Stream from "../models/Stream";
import {
  Badge,
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { RiSlideshow2Line } from "react-icons/ri";
import { CgEyeAlt, CgUser } from "react-icons/cg";

const StreamPane: FC<Stream> = (props) => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <HStack bg={bg} borderRadius="16px">
      <Image
        src={props.coverImageUrl}
        alt="Stream 1"
        w="250px"
        h="156px"
        borderTopLeftRadius="16px"
        borderBottomLeftRadius="16px"
        m={0}
      />
      <VStack
        flex="1"
        h="full"
        alignItems="stretch"
        paddingX="16px"
        paddingTop="22px"
      >
        <HStack>
          <Icon as={RiSlideshow2Line} w={6} h={6} />
          <Heading as="h5" fontSize="16px">
            {props.name}
          </Heading>
        </HStack>
        <Text fontSize="12px">{props.description}</Text>
        <HStack>
          <Box display="flex" alignItems="center">
            <Icon marginRight={1} as={CgUser} />
            <Text>2</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon marginRight={1} as={CgEyeAlt} />
            <Text>150</Text>
          </Box>
          <Spacer />
          <Badge
            fontSize="12px"
            borderRadius="99px"
            padding="4px 8px"
            colorScheme="orange"
          >
            Moderated
          </Badge>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default StreamPane;
