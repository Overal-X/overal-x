import { Button, Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <Center px="20" py="14" gap="6">
      <Text fontSize="4xl">Want to get in touch?</Text>
      <Button as={Link} to="/contact" colorScheme="blue">
        Let's Talk
      </Button>
    </Center>
  );
}

export default ContactSection;
