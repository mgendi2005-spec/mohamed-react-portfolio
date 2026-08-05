import farshaaImage from "../assets/farshaa.png";
import farshaaAdminImage from "../assets/farshaa-admin.png";
import kidouImage from "../assets/kidou-stores.png";
import zelouraImage from "../assets/zeloura-jewelry.png";
import hlbImage from "../assets/hlb-electronics.png";
import darImage from "../assets/dar-al-hakeem.png";
import mkaImage from "../assets/mka.png";
import waterImage from "../assets/water-delivery-kw.png";
import whiteUniformImage from "../assets/white-uniform.png";

const projects = [
  {
    id: "farshaa",
    title: "Farshaa",
    type: "Full-Stack Startup Platform",
    role: "Technical Co-Founder",
    description:
      "An AI-assisted furniture configuration platform that guides customers through selecting layouts, materials, styles, features, and budgets.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    images: [farshaaImage, farshaaAdminImage],
    liveUrl: null,
  },

  {
    id: "kidou-stores",
    title: "Kidou Stores",
    type: "Fashion E-commerce Website",
    role: "Built End-to-End",
    description:
      "A responsive WooCommerce store featuring customized product pages, checkout improvements, WhatsApp order confirmation, and client-specific functionality.",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CSS"],
    images: [kidouImage],
    liveUrl: "https://kidoustores.com/",
  },

  {
    id: "zeloura-jewelry",
    title: "Zeloura Jewelry",
    type: "Jewelry E-commerce Website",
    role: "Built End-to-End",
    description:
      "A polished jewelry store focused on elegant product presentation, responsive shopping, and a smooth customer purchasing experience.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "JavaScript",
      "CSS",
    ],
    images: [zelouraImage],
    liveUrl: "https://zelourajewelry.online/",
  },

  {
    id: "hlb-electronics",
    title: "HLB Electronics",
    type: "Electronics E-commerce Website",
    role: "Built End-to-End",
    description:
      "An electronics store with an organized product catalogue, responsive layouts, product filtering, and an accessible shopping experience.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "JavaScript",
      "CSS",
    ],
    images: [hlbImage],
    liveUrl: "https://hlbinelectronics.online/",
  },

  {
    id: "dar-al-hakeem",
    title: "Dar Al-Hakeem",
    type: "Publishing E-commerce Website",
    role: "Managed & Optimized",
    description:
      "Managed website content and applied interface improvements to strengthen product discovery, usability, and the customer purchasing journey.",
    technologies: ["WordPress", "WooCommerce", "Elementor", "CSS"],
    images: [darImage],
    liveUrl: "https://daralhakeem.com/",
  },

  {
    id: "mka",
    title: "MKA",
    type: "Corporate Services Website",
    role: "Maintained & Improved",
    description:
      "Applied client-requested edits and improved page layouts, responsive behavior, content presentation, and the overall user experience.",
    technologies: ["WordPress", "Elementor", "JavaScript", "CSS"],
    images: [mkaImage],
    liveUrl: "https://mkakw.com/en/en-home/",
  },

  {
    id: "water-delivery-kw",
    title: "Water Delivery KW",
    type: "Delivery E-commerce Website",
    role: "WooCommerce Support & Optimization",
    description:
      "Contributed website improvements and WooCommerce edits focused on simplifying product ordering and improving the customer journey.",
    technologies: ["WordPress", "WooCommerce", "Elementor", "CSS"],
    images: [waterImage],
    liveUrl: "https://waterdeliverykw.com/",
  },

  {
    id: "white-uniform",
    title: "White Uniform",
    type: "Professional Uniform E-commerce Website",
    role: "Maintained & Improved",
    description:
      "Applied store edits and user-experience improvements to support clearer product browsing and a smoother purchasing process.",
    technologies: ["WordPress", "WooCommerce", "Elementor", "CSS"],
    images: [whiteUniformImage],
    liveUrl: "https://whiteuniform.net/",
  },
];

export default projects;
