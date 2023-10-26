import team01 from "@/images/team-01.png";
import team02 from "@/images/team-02.png";
import team03 from "@/images/team-03.png";

import GlobeIcon from "@/components/icons/globe";
import SpeedIcon from "@/components/icons/speed";
import SupportIcon from "@/components/icons/support";
import TeamIcon from "@/components/icons/team";
import BusinessIcon from "@/components/icons/business";
import DesignIcon from "@/components/icons/design";
import CodeBracketsIcon from "@/components/icons/code-brackets";
import CustomizeIcon from "@/components/icons/customize";
import UpdateIcon from "@/components/icons/update";

export const features = [
  {
    icon: { element: SupportIcon, color: "pink.500" },
    title: "24/7 Support",
    descr:
      "Our dedicated support team is available around the clock to provide assistance and guidance for all your inquiries and concerns.",
  },
  {
    icon: { element: GlobeIcon, color: "blue.500" },
    title: "Worldwide",
    descr:
      "With a presence in over 50 countries, we proudly serve a diverse global community, ensuring our services reach every corner of the world.",
  },
  {
    icon: { element: TeamIcon, color: "green.500" },
    title: "Team",
    descr:
      "Meet our passionate team of professionals, each bringing unique expertise and dedication to deliver the best solutions for our clients worldwide.",
  },
];

export const teams = [
  { image: team01, name: "Mohammed Al-Ameen", title: "CEO" },
  {
    image: team02,
    name: "Olakotan Daniel",
    title: "Developer",
  },
  {
    image: team03,
    name: "Salawu Afolabi",
    title: "Developer",
  },
];

export const services = [
  {
    title: "Crafted for Startups",
    description:
      "Tailored solutions designed to empower and elevate the growth of startups, enabling them to thrive in a competitive market.",
    icon: BusinessIcon,
  },
  {
    title: "High-quality Design",
    description:
      "Innovative and aesthetically pleasing design services that capture the essence of your brand and resonate with your target audience.",
    icon: DesignIcon,
  },
  {
    title: "All Essential Sections",
    description:
      "Comprehensive integration of all necessary components ensuring a seamless user experience and effective functionality for your platform.",
    icon: CodeBracketsIcon,
  },
  {
    title: "Speed Optimized",
    description:
      "Optimized solutions that prioritize efficiency, ensuring fast loading times and a smooth user experience for your audience.",
    icon: SpeedIcon,
  },
  {
    title: "Fully Customizable",
    description:
      "Flexible and customizable options that allow you to tailor and personalize your services to meet your specific business needs and goals.",
    icon: CustomizeIcon,
  },
  {
    title: "Regular Updates",
    description:
      "Continuous updates and improvements to keep your platform up-to-date with the latest technological advancements and industry standards.",
    icon: UpdateIcon,
  },
];
