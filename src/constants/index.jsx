import featuredimg from "../assets/featured.png";
import whywestartedimg from "../assets/close-up-photography-of-man-wearing-sunglasses-1212984.png";
import FloydMiles from "../assets/4-qiz.png"
import DianneRussell from "../assets/2-qiz.png"
import JennyWilson from "../assets/3-bola.png"
import LeslieAlexander from "../assets/1-bola.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BuildingOffice2Icon, RocketLaunchIcon, ChartBarIcon, CpuChipIcon } from "@heroicons/react/24/outline";

export const icons = {
  "office-building": BuildingOffice2Icon,
  "rocket-launch": RocketLaunchIcon,
  "chart-bar": ChartBarIcon,
  "cpu-chip": CpuChipIcon,
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/Blog" },
  { label: "About Us", href: "/AboutUs" },
  { label: "Contact Us", href: "/ContactUs" },
];

export const featuredPostData = [
  {
    image: featuredimg,
    author: "John Doe",
    date: "May 23, 2022",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];

// All Posts
export const posts = [
  {
    date: "July 23, 2021",
    author: "John Doe",
    title: "8 Figma design systems that you can download for free today.",
  },
  {
    title: "8 Figma design systems that you can download for free today.",
    author: "John Doe",
    date: "July 23, 2021",
  },
  {
    title: "8 Figma design systems that you can download for free today.",
    author: "John Doe",
    date: "July 23, 2021",
  },
  {
    title: "8 Figma design systems that you can download for free today.",
    author: "John Doe",
    date: "July 23, 2021",
  },
];
// ! About
export const aboutData = {
  title: "ABOUT US",
  heading: "We are a community of content writers who share their learnings",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  linkText: "Read More >",
};

export const missionData = {
  title: "OUR MISSION",
  heading: "Creating valuable content for creatives all around the world",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

// Choose a Category
export const categoriess = [
  {
    title: "Business",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    icon: "office-building",
  },
  {
    title: "Startup",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    icon: "rocket-launch",
  },
  {
    title: "Economy",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    icon: "chart-bar",
  },
  {
    title: "Technology",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    icon: "cpu-chip",
  },
];

export const whyWeStartedData = [
  {
    title: "Why We Started",
    heading: "It started out as a simple idea and evolved into our passion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    buttonText: "Discover our story ",
    imageUrl: whywestartedimg,
  },
];

// ! ListOf

export const profileData = [
  {
    name: "Floyd Miles",
    position: "Content Writer @Company",
    image: JennyWilson,
    socialLinks: [
      { icon: <FaFacebookF />, url: "https://facebook.com" },
      { icon: <FaTwitter />, url: "https://twitter.com" },
      { icon: <FaInstagram />, url: "https://instagram.com" },
      { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    ],
  },
  {
    name: "Dianne Russell",
    position: "Content Writer @Company",
    image: FloydMiles, 
    socialLinks: [
      { icon: <FaFacebookF />, url: "https://facebook.com" },
      { icon: <FaTwitter />, url: "https://twitter.com" },
      { icon: <FaInstagram />, url: "https://instagramje.com" },
      { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    ],
  },
  {
    name: "Jenny Wilson",
    position: "Content Writer @Company",
    image: DianneRussell,
    socialLinks: [
      { icon: <FaFacebookF />, url: "https://facebook.com" },
      { icon: <FaTwitter />, url: "https://twitter.com" },
      { icon: <FaInstagram />, url: "https://instagram.com" },
      { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    ],
  },
  {
    name: "Leslie Alexander",
    position: "Content Writer @Company",
    image: LeslieAlexander, 
    socialLinks: [
      { icon: <FaFacebookF />, url: "https://facebook.com" },
      { icon: <FaTwitter />, url: "https://twitter.com" },
      { icon: <FaInstagram />, url: "https://instagram.com" },
      { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    ],
  },
];

// const testimonials = [
//   {
//     user: "Jonathan Vallem",
//     location: "New York, USA",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

// // Newsletter Subscription
// const newsletter = {
//   title: "Subscribe to our news letter to get latest updates and news",
//   placeholder: "Enter your email",
//   buttonText: "Subscribe",
// };
