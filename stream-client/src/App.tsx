import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="full" h="full" px={0} display="flex" flexDirection="row">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
