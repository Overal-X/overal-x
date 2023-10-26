import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Link as ALink,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "@/images/full-logo.jpg";

function Footer() {
  return (
    <VStack as="footer" borderTop="1px" w="full" pt="8" gap="14">
      <Stack
        direction={["column", "row"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="full"
        px="12"
      >
        <Image src={logo} w={["80%", "56"]} h="44" />

        <Stack direction={["column", "row"]} gap={["6", "14"]}>
          {[
            {
              heading: "Quick Links",
              list: [
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
                { name: "Contact", url: "/contact" },
                { name: "Privacy Policy", url: "/privacy-policy" },
              ],
            },
            {
              heading: "Services",
              list: [
                { name: "Software Development", url: "/" },
                { name: "Graphics Design", url: "/" },
                { name: "Cloud Infastructure", url: "/" },
                { name: "Ui/Ux Design", url: "/" },
              ],
            },
            {
              heading: "Support",
              list: [
                { name: "Company", url: "/" },
                { name: "Press media", url: "/" },
                { name: "Our Blog", url: "/" },
                { name: "Contact Us", url: "/" },
              ],
            },
          ].map((link, i) => (
            <VStack key={i}>
              <Heading size="md" fontWeight="normal">
                {link.heading}
              </Heading>

              <List color="GrayText">
                {link.list.map((list, i) => (
                  <ListItem key={i}>
                    <ALink as={Link} to={list.url}>
                      {list.name}
                    </ALink>
                  </ListItem>
                ))}
              </List>
            </VStack>
          ))}

          <VStack>
            <Heading size="md" fontWeight="normal">
              Newsletter
            </Heading>
            <Text color="GrayText">Subscribe to recieve future updates</Text>
            <InputGroup>
              <Input type="email" placeholder="Enter Email" />
              <InputRightElement>
                <ArrowForwardIcon color="blue.600" />
              </InputRightElement>
            </InputGroup>
          </VStack>
        </Stack>
      </Stack>

      <Stack
        direction={["column", "row"]}
        justifyContent="space-between"
        w="full"
        px="12"
        color="GrayText"
      >
        <HStack gap="4">
          <ALink as={Link} to="/">
            English
          </ALink>
          <ALink as={Link} to="/">
            Privacy Policy
          </ALink>
          <ALink as={Link} to="/">
            Support
          </ALink>
        </HStack>
        <Text>
          &copy; {new Date().getFullYear()} Overal X, All Rights Reserved
        </Text>
      </Stack>
    </VStack>
  );
}

export default Footer;
