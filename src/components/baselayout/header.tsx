import { HStack, Heading, Link as ALink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HStack as="header" px={["4", "20"]} py="6" justifyContent="space-between">
      <Heading as={Link} to="/" size="lg">
        Overal X
      </Heading>

      <HStack as="nav" gap={["2", "10"]}>
        <ALink as={Link} to="/about">
          About
        </ALink>
        <ALink as={Link} to="/contact">
          Contact
        </ALink>
        <ALink as={Link} to="/support">
          Support
        </ALink>
      </HStack>
    </HStack>
  );
}

export default Header;
