import {
  AiOutlineClockCircle,
  AiOutlineMobile,
  AiOutlineSafetyCertificate,
  AiOutlineShop,
} from "react-icons/ai";
import { FaCar, FaPlaneDeparture } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdFastfood, MdOutlineWork } from "react-icons/md";

export const navlinks = [
  { id: 1, title: "Sale 11.11" },
  { id: 2, title: "Featured" },
  { id: 3, title: "Categories" },
  { id: 4, title: "Seasonal" },
];
export const productdata = [
  {
    id: 1,
    name: "Apple Watch",
    category: "Gadgets",
    price: "299.99",
    image: "/rolex.png",
    isPopular: true,
  },
  {
    id: 2,
    name: "Apple Headphone",
    category: "Gadgets",
    price: "119.99",
    image: "/pink-headphone.png",
    isPopular: true,
  },
  {
    id: 3,
    name: "Nike Shoes",
    category: "Fashion",
    price: "89.99",
    image: "/nike-sneakers.png",
    isPopular: false,
  },
  {
    id: 4,
    name: "Hp EliteBook",
    category: "Gadgets",
    price: "999.99",
    image: "/hp-elitebook.png",
    isPopular: false,
  },
  {
    id: 5,
    name: "MacBook Pro",
    category: "Gadgets",
    price: "199.99",
    image: "/macbooks.png",
    isPopular: false,
  },
  {
    id: 6,
    name: "Iphone 13Pro",
    category: "Gadgets",
    price: "199.99",
    image: "/iphone.png",
    isPopular: false,
  },
  {
    id: 7,
    name: "Samsung Led-TV",
    category: "Gadgets",
    price: "199.99",
    image: "/Samsung-TV.png",
    isPopular: true,
  },
];

export const addedinfos = [
  {
    icon: <AiOutlineClockCircle />,
    title: "Fast Shipping",
    subtitle: "Only less than 48hours",
  },
  {
    icon: <AiOutlineSafetyCertificate />,
    title: "Secured",
    subtitle: "High end technology",
  },
  {
    icon: <AiOutlineShop />,
    title: "183,499 Stores",
    subtitle: "All high quality products",
  },
];

export const categoriesdata = [
  {
    icon: <GiClothes />,
    category: "Fashion",
    totalitems: "837",
  },
  {
    icon: <AiOutlineMobile />,
    category: "Gadgets",
    totalitems: "247",
  },
  {
    icon: <FaCar />,
    category: "Tranport",
    totalitems: "337",
  },
  {
    icon: <MdOutlineWork />,
    category: "Office",
    totalitems: "137",
  },
  {
    icon: <MdFastfood />,
    category: "Food",
    totalitems: "637",
  },
  {
    icon: <FaPlaneDeparture />,
    category: "Travel",
    totalitems: "137",
  },
];

export const testimonialsdata = [
  {
    id: 1,
    name: "Cindy",
    avatar: "/img-1.png",
    role: "Influencer",
    ratings: 4,
    text: "I spent money worth of everything in here, thank you Shoppy for providing lots of great products for us .",
  },
  {
    id: 2,
    name: "Angga",
    avatar: "/img-2.png",
    role: "Student",
    ratings: 4,
    text: "I saved 50% expense by shopping here as a college student, thank you Shoppy for making this happen.",
  },
  {
    id: 3,
    name: "Rahel",
    avatar: "/img-3.png",
    role: "Housewife",
    ratings: 5,
    text: "Our house getting better everyday because we shopped in shoppy with cheaper prices yet high quality.",
  },
  {
    id: 4,
    name: "Cindy",
    avatar: "/img-4.png",
    role: "Influencer",
    ratings: 4,
    text: "I spent money worth of everything in here, thank you Shoppy for providing lots of great products for us .",
  },
  {
    id: 5,
    name: "Angga",
    avatar: "/img-1.png",
    role: "Student",
    ratings: 4,
    text: "I saved 50% expense by shopping here as a college student, thank you Shoppy for making this happen.",
  },
  {
    id: 6,
    name: "Rahel",
    avatar: "/music-label-4.png",
    role: "Housewife",
    ratings: 5,
    text: "Our house getting better everyday because we shopped in shoppy with cheaper prices yet high quality.",
  },
];
export const footerlinks = [
  {
    title: "Products",
    links: ["Sneakers", "Jackets", "Gadgets", "Home Tools", "Furniture"],
  },
  {
    title: "Resources",
    links: [
      "Support 24/7",
      "Help Center",
      "How-to Instructions",
      "Blog & Tips",
      "About Us",
    ],
  },
  {
    title: "Company",
    links: [
      "privacy and Policy",
      "Terms and Conditions",
      "Investors Relations",
      "Join With Us",
      "Our Statistics",
    ],
  },
];
