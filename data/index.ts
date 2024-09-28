import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My tech stack",
    description: "I constantly try to improve",
    className:
      " flex lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "",
    titleClassName: "justify-start w-full ",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "I prioritize client collaboration, fostering open communication ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    description: "",

    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Chrome Extension",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Code clash",
    des: "Dive into the world of competitive coding with Code Clash, where problem-solving prowess meets real-time competition for developers and enthusiasts alike!",
    img: "/codeclash.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongodbi.svg",
      "/prisma.svg",
      "/firebase.svg",
    ],
    link: "https://codesclash.vercel.app/",
  },
  {
    id: 2,
    title: "YouSync",
    des: "Stream and connect effortlessly with You Sync, where you can sync your screens and share every moment with your besties, no matter the distance!",
    img: "/yousync.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongodbi.svg",
      "/prisma.svg",
      "/firebase.svg",
    ],
    link: "https://yousyncs.vercel.app/",
  },
  {
    id: 3,
    title: "Netflix Clone",
    des: " Experience endless entertainment, a Netflix-inspired platform that brings your favorite movies and shows right to your screen. Browse, watch, and enjoy—anytime, anywhere!",
    img: "/netflix.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/firebase.svg"],
    link: "https://mellifluous-churros-b1b1d2.netlify.app/",
  },
  {
    id: 4,
    title: "ShopEase",
    des: "Experience effortless shopping with ShopEase, the go-to e-commerce platform where you can explore a vast selection of products, make secure purchases, and enjoy a seamless online shopping experience!",
    img: "/ecom.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/redux.svg",
      "/mongodbi.svg",
    ],
    link: "https://playful-semifreddo-7b40b8.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Deepanshu is a highly skilled and dedicated professional, and I genuinely recommend him. Having worked with many freelancers, I can confidently say that collaborating with Deepanshu has been one of my best experiences. His attention to detail and ability to deliver exactly what I needed were impressive. He managed the project effectively and often anticipated my needs before I even expressed them. I’m looking forward to working with him again in the near future.",
    name: "Binbag",
    title: "E-waste recycling company ",
    imgl: "/binbag.svg",
  },
  {
    quote:
      "Working with Deepanshu at Autonomous Web has been a great experience. His expertise, attention to detail, and proactive approach made the web development process seamless. Highly recommended!",
    name: "Autonomous Web",
    title: "Web Agency",
    imgl: "/autweb.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Binbag",
    img: "/binbag.svg",
    nameImg: "/binbag.svg",
  },
  {
    id: 2,
    name: "Autonomous Web",
    img: "/autweb.jpeg",
    nameImg: "/autweb.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/deepanshupali",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/deep__nshu",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/deepanshu-pali-8664a4209/",
  },
];
