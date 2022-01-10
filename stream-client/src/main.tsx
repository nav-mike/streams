import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/reducer";
import { SocketProvider } from "./contexts/SocketContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <SocketProvider>
            <App />
          </SocketProvider>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
