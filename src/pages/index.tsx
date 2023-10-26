import { Box } from "@chakra-ui/react";

import FeaturesSection from "@/components/homepage/features";
import HeroSection from "@/components/homepage/hero";
import ServicesSection from "@/components/homepage/services";
import TeamSection from "@/components/homepage/teams";
import TestimonialSection from "@/components/homepage/testimonials";
import ContactSection from "@/components/homepage/contact";

const HomePage = (): JSX.Element => {
  return (
    <Box>
      <HeroSection />

      <FeaturesSection />

      <TeamSection />

      <ServicesSection />

      <TestimonialSection />

      <ContactSection />
    </Box>
  );
};

export default HomePage;
