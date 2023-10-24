import { VStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import SpeedIcon from "../icons/speed";
import { services } from "@/store/homepage";

function ServicesSection() {
  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      py="10"
      px="8"
      my="4"
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
        We offer the best quality service for you
      </Heading>
      <Text textAlign="center" maxW="2xl" color="blackAlpha.700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
        necessitatibus. Sit voluptates sint reprehenderit, ad recusandae in.
        Quibusdam, minus veritatis.
      </Text>

      <SimpleGrid columns={[1, 3]} spacing={10} px={["4", "14"]} py="10">
        {services.map((item) => (
          <VStack placeItems="start">
            <SpeedIcon color="rgb(0, 0, 234)" size={40} />
            <Text fontSize="2xl">{item.title}</Text>
            <Text
              color="blackAlpha.700"
              fontSize="sm"
              textTransform="capitalize"
            >
              {item.description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default ServicesSection;
