import React from "react";
import ReactDOM from "react-dom/client";
import { Box, ChakraProvider, ColorModeScript, Image } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App";
import "./index.css";
import getCroppedImageUrl from "./services/getCroppedImageUrl";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
      ></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
