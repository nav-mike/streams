import { FC, useEffect } from "react";
import {
  Avatar,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CgCalendarDue, CgHomeAlt, CgUserList } from "react-icons/cg";
import { BsCalendar3, BsChevronLeft } from "react-icons/bs";
import { IoChatbubblesOutline, IoPaperPlaneOutline } from "react-icons/io5";
import MenuLink from "../components/MenuLink";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAllStreams } from "../api/streams";
import { getAllStreams as allStreams } from "../store/actions/streams";
import Stream from "../models/Stream";
import StreamsPane from "../components/StreamsPane";

const Home: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const mainBg = useColorModeValue("gray.200", "gray.900");
  const streams: Stream[] = useAppSelector<{ streams: Stream[] }>(
    (state) => state.streams
  ).streams;
  const dispatch = useAppDispatch();

  console.log(streams);

  useEffect(() => {
    getAllStreams().then((streams) => {
      dispatch(allStreams(streams));
    });
  }, [dispatch]);

  return (
    <Container maxW="full" h="full" px={0} display="flex" flexDirection="row">
      <Flex
        direction="column"
        w="80px"
        alignItems="center"
        maxH="full"
        h="full"
        py="10px"
      >
        <IconButton
          m="16px"
          onClick={toggleColorMode}
          aria-label="Switch theme"
          bg={bg}
          icon={
            colorMode === "light" ? (
              <MoonIcon w={8} h={8} />
            ) : (
              <SunIcon w={8} h={8} />
            )
          }
        />
        <MenuLink url="/home" icon={CgHomeAlt} />
        <MenuLink url="/favorite" icon={CgCalendarDue} />
        <MenuLink url="/speakers" icon={CgUserList} />
        <Spacer />
        <Avatar name="Dan Abramov" src="https://bit.ly/dan-abramov" />
      </Flex>
      <VStack
        borderLeftColor={mainBg}
        borderLeftStyle="solid"
        borderLeftWidth="2px"
        borderRightColor={mainBg}
        borderRightStyle="solid"
        borderRightWidth="2px"
        flex="1"
        alignItems="stretch"
      >
        <Flex px="8px" py="17px" h="56px">
          <Heading as="h4" size="sm" alignSelf="center">
            Streams App
          </Heading>
          <Spacer />
          <IconButton
            aria-label="Calendar"
            p={0}
            m={0}
            alignSelf="center"
            color="blue.500"
            icon={<Icon as={BsCalendar3} />}
          />
        </Flex>
        <StreamsPane
          live={streams.filter((item) => item.status === 0)}
          comingUp={streams.filter((item) => item.status === 1)}
        />
      </VStack>
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
    </Container>
  );
};

export default Home;
