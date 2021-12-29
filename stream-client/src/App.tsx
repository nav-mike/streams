import { Container, Flex, VStack } from "@chakra-ui/react";
import "./App.css";
import Cart from "./components/cart";
import Details from "./components/details";

function App() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}

export default App;
