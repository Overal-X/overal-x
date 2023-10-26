import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";

import { teams } from "@/store/homepage";

function TeamSection() {
  return (
    <VStack
      as="section"
      alignItems="center"
      justifyContent="center"
      py="10"
      px="8"
      mt="4"
      bg="blackAlpha.100"
    >
      <Heading
        as="h2"
        fontSize={["2xl", "3xl"]}
        fontWeight="semibold"
        textTransform="capitalize"
        textAlign="center"
        maxW="lg"
      >
        Meet with our creative dedicated team
      </Heading>
      <Text textAlign="center" maxW="2xl" color="blackAlpha.700">
        Meet our passionate team of professionals, each bringing unique
        expertise and dedication to deliver the best solutions for our clients
        worldwide.
      </Text>

      <Stack
        direction={["column", "row"]}
        w="full"
        justifyContent="space-between"
        px={["4", "14"]}
        py="10"
      >
        {teams.map((item) => (
          <VStack placeItems="center">
            <Image src={item.image} w={350} h={350} rounded="lg" shadow="md" />
            <Text fontSize="2xl">{item.name}</Text>
            <Text
              color="blackAlpha.700"
              fontSize="sm"
              textTransform="capitalize"
            >
              {item.title}
            </Text>
          </VStack>
        ))}
      </Stack>
    </VStack>
  );
}

export default TeamSection;
