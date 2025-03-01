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
        I am a <span className="font-bold">Frontend Engineer </span>passionate about crafting  <span className="italic font-bold">seamless, high-performance</span> web experiences technologies, With expertise in <span className="italic font-bold">ReactJS, Redux, JavaScript, CSS, HTML</span> with specialization in <span className="italic font-bold">B.Tech Information Technology. </span>
        Currently, I’m shaping the frontend of an <span className="font-bold">OTT platform</span> web app in current organization, where I drive <span className="italic font-bold">modularization, performance optimization, bug fixing so on.</span> I thrive on solving complex problems, staying ahead of the latest frontend trends, and optimizing workflows to build robust digital experiences. Exploring <span className="italic font-bold">frontend system design, backend technologies</span> and many more in Tech. 🚀
      </p>

      <p>
        <span className="italic">PS : You can talk with me about travels, investments and Tech 💻 of course.
          Feel free to reach out me, and build something amazing together !</span>
      </p>
    </motion.section>
  );
}

