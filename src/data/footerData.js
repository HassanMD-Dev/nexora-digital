import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const quickLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Services",
    href: "/services",
  },
  {
    id: 3,
    title: "Projects",
    href: "/projects",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  },
];

export const services = [
  {
    id: 1,
    title: "Web Development",
  },
  {
    id: 2,
    title: "UI/UX Design",
  },
  {
    id: 3,
    title: "SEO Optimization",
  },
  {
    id: 4,
    title: "Digital Marketing",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: FaGithub,
    href: "https://github.com",
  },
  {
    id: 2,
    icon: FaLinkedin,
    href: "https://linkedin.com",
  },
  {
    id: 3,
    icon: FaFacebook,
    href: "https://facebook.com",
  },
  {
    id: 4,
    icon: FaInstagram,
    href: "https://instagram.com",
  },
];

const footerData = {
  quickLinks,
  services,
  socialLinks,
};

export default footerData;
