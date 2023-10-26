import ServicesSection from "@/components/homepage/services";
import TeamSection from "@/components/homepage/teams";
import { Heading, Text, VStack } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <VStack py="10" px={["8", "20"]}>
      <Heading size="lg">About Overal-X</Heading>
      <Text>
        At Overal X, we're dedicated to delivering innovative and comprehensive
        enterprise solutions that empower businesses to thrive in the modern
        digital landscape. With our expertise and commitment to excellence, we
        stand ready to help you achieve your goals, no matter where you are on
        your journey.
      </Text>
      <TeamSection />
      <ServicesSection />
    </VStack>
  );
};

export default AboutPage;
