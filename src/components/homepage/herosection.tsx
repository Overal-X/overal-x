import { Center, Stack, VStack, Text, Image } from "@chakra-ui/react";

import hero from "@/images/hero.png";

function HeroSection() {
  return (
    <Center w="full" px={["8", "20"]} py="10">
      <Stack direction={["column-reverse", "row"]}>
        <VStack w="full" alignItems="center" justifyContent="center">
          <Text fontSize={["2xl", "5xl"]} fontWeight="medium">
            We specialize in UI/UX, Web Development, Digital Marketing
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt
            reiciendis hic laudantium dolor culpa voluptate ullam! Ratione
            provident excepturi deleniti architecto id reprehenderit.
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
