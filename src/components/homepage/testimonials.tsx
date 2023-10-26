import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

function TestimonialSection() {
  return (
    <VStack px={["8", "20"]} py="10">
      <Heading
        as="h2"
        fontSize={["2xl", "3xl"]}
        fontWeight="semibold"
        textTransform="capitalize"
        textAlign="center"
        maxW="lg"
      >
        Client's Testimonials
      </Heading>
      <Text textAlign="center" maxW="2xl" color="blackAlpha.700">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using.
      </Text>

      <Box>
        <SimpleGrid columns={[1, 4]} gap={4}>
          {[1, 2, 3, 4].map((_, i) => (
            <VStack
              key={i}
              placeItems="start"
              bg="white"
              p="6"
              rounded="lg"
              boxShadow="md"
              border="1px solid #eee"
            >
              <Text fontStyle="italic" fontSize={["lg", "xl"]} color="GrayText">
                PHP is a powerful and versatile programming language that has
                been used to build some of the most popular websites and web
                applications on the internet.
              </Text>
              <Text fontWeight="medium" fontSize={["xl", "2xl"]}>
                Afolabi Salawu
              </Text>
              <Text
                as="a"
                href="https://intellicsolutions.org"
                color="CaptionText"
              >
                Founder @intellicsolutions
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
}

export default TestimonialSection;
