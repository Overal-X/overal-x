import { FC } from "react";

import { AppLayoutProps } from "./applayout.interface";
import { Container } from "@chakra-ui/react";

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AppLayout;
