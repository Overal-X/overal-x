import team01 from "@/images/team-01.png";
import team02 from "@/images/team-02.png";
import team03 from "@/images/team-03.png";

import GlobeIcon from "@/components/icons/globe";
import SpeedIcon from "@/components/icons/speed";
import SupportIcon from "@/components/icons/support";
import TeamIcon from "@/components/icons/team";

export const features = [
  {
    icon: { element: SupportIcon, color: "pink.500" },
    title: "24/7 Support",
    descr:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, molestiae?",
  },
  {
    icon: { element: GlobeIcon, color: "blue.500" },
    title: "Worldwide",
    descr:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, molestiae?",
  },
  {
    icon: { element: TeamIcon, color: "green.500" },
    title: "Team",
    descr:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, molestiae?",
  },
];

export const teams = [
  { image: team01, name: "Mohammed Al-Ameen", title: "Oga nla" },
  {
    image: team02,
    name: "Olakotan Daniel",
    title: "Omose",
  },
  {
    image: team03,
    name: "Oluwaseun Oluwafemi",
    title: "Omo Iya",
  },
];

export const services = [
  {
    title: "Crafted for Startups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: SpeedIcon,
  },
  {
    title: "High-quality Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: SpeedIcon,
  },
  {
    title: "All Essential Sections",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: SpeedIcon,
  },
  {
    title: "Speed Optimized",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: SpeedIcon,
  },
  {
    title: "Fully Customizable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: SpeedIcon,
  },
  {
    title: "Regular Updates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: SpeedIcon,
  },
];
