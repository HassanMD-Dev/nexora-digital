const pricingData = [
  {
    id: 1,
    title: "Starter",
    price: "$299",
    duration: "One-Time Payment",
    description:
      "Perfect for startups and small businesses looking for a professional online presence.",
    features: [
      "Responsive Website",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Contact Form",
      "7 Days Support",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    id: 2,
    title: "Professional",
    price: "$599",
    duration: "One-Time Payment",
    description:
      "Ideal for growing businesses that need a modern, scalable, and conversion-focused website.",
    features: [
      "Everything in Starter",
      "Up to 10 Pages",
      "Advanced SEO Optimization",
      "CMS Integration",
      "Performance Optimization",
      "30 Days Support",
    ],
    buttonText: "Choose Plan",
    popular: true,
  },
  {
    id: 3,
    title: "Enterprise",
    price: "Custom",
    duration: "Let's Talk",
    description:
      "Tailored solutions for businesses that require advanced functionality, custom features, and dedicated support.",
    features: [
      "Unlimited Pages",
      "Custom Web Solutions",
      "API Integration",
      "Priority Support",
      "Ongoing Maintenance",
      "Dedicated Consultation",
    ],
    buttonText: "Contact Us",
    popular: false,
  },
];

export default pricingData;