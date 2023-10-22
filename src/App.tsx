import { ChakraProvider } from "@chakra-ui/react";

import AppLayout from "@/layouts/applayout";
import Router from "@/router";
import { theme } from "@/store/theme";

const App = () => {
  return (
    <AppLayout>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </AppLayout>
  );
};

export default App;
