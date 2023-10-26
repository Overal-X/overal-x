import { Box } from "@chakra-ui/react";

import FeaturesSection from "@/components/homepage/features";
import HeroSection from "@/components/homepage/hero";
import ServicesSection from "@/components/homepage/services";
import TeamSection from "@/components/homepage/teams";

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
