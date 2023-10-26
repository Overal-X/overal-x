import { Center, Stack, VStack, Text, Image } from "@chakra-ui/react";

import hero from "@/images/hero.png";

function HeroSection() {
  return (
    <Center as="section" w="full" px={["8", "20"]} py="10">
      <Stack direction={["column-reverse", "row"]}>
        <VStack w="full" alignItems="center" justifyContent="center">
          <Text fontSize={["2xl", "5xl"]} fontWeight="medium">
            Enterprise Solution Provider
          </Text>
          <Text>
            In challenging the notion of scarcity, we unveil the potential for a
            life where abundance flourishes in the balance of our desires and
            realities.
          </Text>
        </VStack>

        <Center w="full">
          <Image src={hero} />
        </Center>
      </Stack>
    </Center>
  );
}

export default HeroSection;
