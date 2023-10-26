import Footer from "@/components/baselayout/footer";
import Header from "@/components/baselayout/header";
import { Box, Code, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <Box>
        <Text fontSize="xl">This page cannot be found.</Text>
        <Text>
          Check if you have added the route or the route link is correct
        </Text>

        <Text>
          you can edit this error page in <Code>pages/error</Code>
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default ErrorPage;
