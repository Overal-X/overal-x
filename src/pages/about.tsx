import ServicesSection from "@/components/homepage/services";
import TeamSection from "@/components/homepage/teams";
import { Heading, Text, VStack } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <VStack py="10" px={["8", "20"]}>
      <Heading size="lg">About Overal-X</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quae
        vitae labore assumenda nobis nihil mollitia sapiente similique quos
        obcaecati quis esse ipsa, reprehenderit odit ad maiores facere vel et
        veritatis nesciunt at sunt. Sunt distinctio incidunt velit debitis sequi
        blanditiis delectus praesentium dolorum tenetur officia tempore corrupti
        voluptates veniam perferendis facilis dicta voluptas, vel molestiae
        aperiam, at itaque maiores. Laborum ut dolore vero fugit pariatur!
        Delectus possimus quod sit libero! Molestias eveniet, rerum a
        necessitatibus dicta nam consequuntur soluta iusto minima doloremque aut
        excepturi ad quisquam? Ipsam hic illo possimus minus perspiciatis fuga
        architecto amet, doloremque alias eum nesciunt?
      </Text>
      <TeamSection />
      <ServicesSection />
    </VStack>
  );
};

export default AboutPage;
