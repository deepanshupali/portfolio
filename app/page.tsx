"use client";

// import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Timeline from "@/components/Timelines";
import { useRef } from "react";

const Home = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const navItems = [
    { name: "About", ref: aboutRef },
    { name: "Projects", ref: projectsRef },
    { name: "Testimonials", ref: testimonialsRef },
    { name: "Contact", ref: contactRef },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero aboutRef={aboutRef} />
        <Grid aboutRef={aboutRef} />
        <RecentProjects projectsRef={projectsRef} />
        <Clients testimonialsRef={testimonialsRef} />
        {/* <Experience /> */}
        {/* <Approach /> */}
        <Timeline />
        <Footer contactRef={contactRef} />
      </div>
    </main>
  );
};

export default Home;
