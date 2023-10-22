import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Footer from "@/components/baselayout/footer";
import Header from "@/components/baselayout/header";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <Box pt="14">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default BaseLayout;
