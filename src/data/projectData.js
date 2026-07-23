import { Globe, Megaphone, TrendingUp } from "lucide-react";
import projectImg1 from "../assets/images/golden.webp"
import projectImg2 from "../assets/images/seoDashboard.jfif"
import projectImg3 from "../assets/images/adsDashboard.png"

const projectData = [
  {
    id: 1,
    image: projectImg1,
    category: "Web Development",
    title: "Corporate Business Website",
    description:
      "Modern responsive business website designed to increase conversions and strengthen brand presence.",
    icon: Globe,
  },
  {
    id: 2,
    image: projectImg2,
    category: "SEO",
    title: "Organic Traffic Growth Campaign",
    description:
      "SEO strategy that improved rankings and increased organic website traffic.",
    icon: TrendingUp,
  },
  {
    id: 3,
    image: projectImg3,
    category: "Paid Advertising",
    title: "Google Ads Lead Generation",
    description:
      "Performance marketing campaign focused on generating qualified leads at lower acquisition cost.",
    icon: Megaphone,
  },
];

export default projectData;
