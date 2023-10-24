import { Box } from "@chakra-ui/react";

import FeaturesSection from "@/components/homepage/featuresection";
import HeroSection from "@/components/homepage/herosection";
import ServicesSection from "@/components/homepage/servicessection";
import TeamSection from "@/components/homepage/teamsection";

const HomePage = (): JSX.Element => {
  return (
    <Box>
      <HeroSection />

      <FeaturesSection />

      <TeamSection />

      <ServicesSection />
    </Box>
  );
};

export default HomePage;
