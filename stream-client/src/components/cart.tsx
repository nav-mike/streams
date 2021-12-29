import {
  Button,
  Divider,
  GridItem,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import image from "../camera.jpg";

const Cart: FC = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <SimpleGrid columns={4} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={1}>
          <Image src={image} alt="Old camera image" />
        </GridItem>
        <GridItem colSpan={2}>
          <VStack alignItems="flex-start">
            <Text as="b">Penny Camera</Text>
            <Text color={secondaryTextColor}>PNYCAM27541</Text>
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <HStack justifyContent="end" w="full" h="full">
            <Text as="b" fontSize="xs">
              $119.00
            </Text>
          </HStack>
        </GridItem>
        <GridItem colSpan={3}>
          <Text color={secondaryTextColor}>Subtotal</Text>
        </GridItem>
        <GridItem>
          <HStack justifyContent="end" w="full" h="full">
            <Text as="b" fontSize="xs">
              $119.00
            </Text>
          </HStack>
        </GridItem>
        <GridItem colSpan={3}>
          <Text color={secondaryTextColor}>Shipping</Text>
        </GridItem>
        <GridItem>
          <HStack justifyContent="end" w="full" h="full">
            <Text as="b" fontSize="xs">
              $19.99
            </Text>
          </HStack>
        </GridItem>
        <GridItem colSpan={3}>
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
        </GridItem>
        <GridItem>
          <HStack justifyContent="end" w="full" h="full">
            <Text as="b" fontSize="xs">
              $23.80
            </Text>
          </HStack>
        </GridItem>
        <GridItem colSpan={4}>
          <Divider />
        </GridItem>
        <GridItem colSpan={3}>
          <Text color={secondaryTextColor}>Total</Text>
        </GridItem>
        <GridItem>
          <HStack justifyContent="end" w="full" h="full">
            <Text as="b" fontSize="xl">
              $162.79
            </Text>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Cart;
