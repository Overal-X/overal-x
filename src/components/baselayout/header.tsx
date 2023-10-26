import { Link as ALink, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "@/images/logo.jpg";

function Header() {
  const [scroll, scrollState] = useState(false);

  function handleScroll() {
    if (window.scrollY > 50) scrollState(true);
    else scrollState(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <HStack
      as="header"
      w="full"
      px={["4", "20"]}
      py="4"
      justifyContent="space-between"
      shadow={scroll ? "lg" : "none"}
      pos="fixed"
      bg="white"
      borderBottom="1px"
    >
      <Heading as={Link} to="/" size="lg" display="flex" alignItems="center">
        <Image src={logo} w="14" />
        <Text>Overal X</Text>
      </Heading>

      <HStack as="nav" gap={["2", "10"]}>
        <ALink as={Link} to="/about">
          About
        </ALink>
        <ALink as={Link} to="/contact">
          Contact
        </ALink>
      </HStack>
    </HStack>
  );
}

export default Header;
