import {
  HStack,
  Link as ALink,
  Text,
  VStack,
  Heading,
  List,
  ListItem,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <VStack as="footer" borderTop="1px" w="full" pt="8" gap="14">
      <Stack
        direction={["column", "row"]}
        justifyContent={["center", "space-between"]}
        w="full"
        px="12"
      >
        <VStack w={["full", "56"]} textAlign="left">
          <Heading>Overal X</Heading>
          <Text textAlign="center" color="GrayText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
            voluptates.
          </Text>
        </VStack>

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
          ].map((link) => (
            <VStack>
              <Heading size="md" fontWeight="normal">
                {link.heading}
              </Heading>

              <List color="GrayText">
                {link.list.map((list) => (
                  <ListItem>
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
