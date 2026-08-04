import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactInfoData = [
  {
    id: 1,
    icon: Mail,
    title: "Email Us",
    value: "hello@nexora.com",
    description: "Send us an email anytime. We usually reply within 24 hours.",
  },
  {
    id: 2,
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Available Monday to Friday from 9 AM to 6 PM.",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Visit Us",
    value: "New York, USA",
    description: "Meet our team and discuss your project in person.",
  },
  {
    id: 4,
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Fri | 9:00 AM - 6:00 PM",
    description: "Weekend appointments available upon request.",
  },
];

export default contactInfoData;
