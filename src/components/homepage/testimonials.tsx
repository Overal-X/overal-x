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
        <SimpleGrid columns={[1, 2]} gap={4} w="full">
          {[
            {
              comment:
                "PHP is a powerful and versatile programming language that has been used to build some of the most popular websites and web applications on the internet.",
              author: "Afolabi Salawu",
              company: "Intellic Solutions",
              companyUrl: "https://intellicsolutions.org",
            },
            {
              comment:
                "Farewell, Ruby on Rails, pioneer of streamlined web development. Your elegant syntax and convention-over-configuration ethos transformed the industry. You inspired a generation of developers with your agile, user-centric approach.",
              author: "Daniel Olakotan",
              company: "Shordem",
              companyUrl: "https://hndwok.com",
            },
          ].map((item, i) => (
            <VStack
              key={i}
              w="full"
              placeItems="start"
              bg="white"
              p="6"
              rounded="lg"
              boxShadow="md"
              border="1px solid #eee"
            >
              <Text fontStyle="italic" fontSize={["lg", "xl"]} color="GrayText">
                {item.comment}
              </Text>
              <Text fontWeight="medium" fontSize={["xl", "2xl"]}>
                {item.author}
              </Text>
              <Text as="a" href={item.companyUrl} color="CaptionText">
                Founder @{item.company}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
}

export default TestimonialSection;
