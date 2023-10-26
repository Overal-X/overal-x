import { services } from "@/store/homepage";
import { Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

function ServicesSection() {
  return (
    <VStack
      as="section"
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
        We are committed to providing unparalleled service quality tailored
        specifically to your needs. Our dedication ensures your satisfaction and
        success in every endeavor.
      </Text>

      <SimpleGrid columns={[1, 3]} spacing={10} px={["4", "14"]} py="10">
        {services.map((item) => (
          <VStack placeItems="start" bg="white" p="6" rounded="lg">
            <item.icon color="rgb(0, 0, 234)" size={40} />
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
