"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-bold">Frontend Engineer with 2+ years of experience </span>passionate about crafting  <span className="italic font-bold">seamless, high-performance</span> web experiences, with expertise in <span className="italic font-bold">Front-End Technologies. </span>
        Currently working on <span className="font-bold">GRCTech B2B platform</span> focusing on developing and optimizing complex frontend workflows, improving performance, and delivering reliable user experiences. <span className="font-bold">Backed by a strong engineering mindset </span>with a passion for solving complex problems, writing maintainable code, and building reusable UI systems. Actively exploring <span className="italic font-bold">frontend system design, backend technologies and modern web architecture</span> to grow as a well-rounded engineer 🚀
      </p>

      <p>
        <span className="italic">PS : You can talk with me about travels, investments and Tech 💻 of course.
          Feel free to reach out me, to build something amazing together !</span>
      </p>
    </motion.section>
  );
}

