import { Outlet } from "react-router-dom";

import Footer from "@/components/baselayout/footer";
import Header from "@/components/baselayout/header";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
