import { Box } from "@chakra-ui/react";

import ContactSection from "@/components/homepage/contact";
import FeaturesSection from "@/components/homepage/features";
import HeroSection from "@/components/homepage/hero";
import ServicesSection from "@/components/homepage/services";
import TestimonialSection from "@/components/homepage/testimonials";

const HomePage = (): JSX.Element => {
  return (
    <Box>
      <HeroSection />

      <FeaturesSection />

      <ServicesSection />

      <TestimonialSection />

      <ContactSection />
    </Box>
  );
};

export default HomePage;
