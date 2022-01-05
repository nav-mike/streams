import { FC } from "react";
import Stream from "../models/Stream";
import { Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import StreamPane from "./StreamPane";
import Streams from "./Streams";

interface IStreamProps {
  live: Stream[];
  comingUp: Stream[];
}

const StreamsPane: FC<IStreamProps> = (props) => {
  const mainBg = useColorModeValue("gray.200", "gray.900");

  return (
    <VStack flex="1" bg={mainBg} alignItems="stretch" p="32px">
      <Streams streams={props.live}>
        <Heading as="h4" size="sm" paddingBottom="16px">
          Live now
        </Heading>
      </Streams>
      <Streams streams={props.comingUp}>
        <Heading as="h4" size="sm" paddingY="16px">
          Coming up
        </Heading>
      </Streams>
    </VStack>
  );
};

export default StreamsPane;
