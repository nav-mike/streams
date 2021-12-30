import {
  IconButton,
  Container,
  Flex,
  useColorMode,
  useColorModeValue,
  Icon,
  Link,
  Spacer,
  Avatar,
  Heading,
  VStack,
  HStack,
  Box,
  Image,
  Text,
  Badge,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  CgHomeAlt,
  CgCalendarDue,
  CgUserList,
  CgUser,
  CgEyeAlt,
} from "react-icons/cg";
import { BsCalendar3, BsChevronLeft } from "react-icons/bs";
import { IoPaperPlaneOutline, IoChatbubblesOutline } from "react-icons/io5";
import { RiSlideshow2Line } from "react-icons/ri";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import "./App.css";
import { FC } from "react";
import { IconType } from "react-icons";
import streamImage from "./stream1.jpg";

interface IMenuLinkProps {
  url: string;
  icon: IconType;
}

const MenuLink: FC<IMenuLinkProps> = (props) => {
  const location = useLocation();

  const iconTag = (
    <Icon
      as={props.icon}
      w={6}
      h={6}
      m="16px"
      color={location.pathname === props.url ? "yellow.500" : undefined}
    />
  );

  return (
    <>
      {location.pathname === props.url ? (
        <>{iconTag}</>
      ) : (
        <Link
          variant={location.pathname === props.url ? undefined : "hoverable"}
          as={RouterLink}
          to={props.url}
        >
          {iconTag}
        </Link>
      )}
    </>
  );
};

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const mainBg = useColorModeValue("gray.200", "gray.900");

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
        <VStack flex="1" bg={mainBg} alignItems="stretch" p="32px">
          <Heading as="h4" size="sm" paddingBottom="16px">
            Live now
          </Heading>
          <HStack bg={bg} borderRadius="16px">
            <Image
              src={streamImage}
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
                  Implementing a Cybersecurity Framework
                </Heading>
              </HStack>
              <Text fontSize="12px">
                How to set a business plans to use information to a competitive
                advantage and support enterprise goals. A smart city is an urban
                area that uses different types of electronic methods and sensors
                to collect data. Insights gained from that data are used to
                manage assets, resources and services efficiently.
              </Text>
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
        </VStack>
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
}

export default App;
