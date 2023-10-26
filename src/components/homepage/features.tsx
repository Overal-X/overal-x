import { Center, HStack, Stack, Text, VStack } from "@chakra-ui/react";

import { features } from "@/store/homepage";

function FeaturesSection() {
  return (
    <Stack as="section" px={["8", "20"]} direction={["column", "row"]}>
      {features.map((item) => (
        <HStack alignItems="center">
          <Center bg={item.icon.color} p={"6"} rounded="full">
            <item.icon.element size={44} />
          </Center>
          <VStack placeItems="flex-start">
            <Text fontSize={"2xl"} fontWeight="500">
              {item.title}
            </Text>
            <Text>{item.descr}</Text>
          </VStack>
        </HStack>
      ))}
    </Stack>
  );
}

export default FeaturesSection;
