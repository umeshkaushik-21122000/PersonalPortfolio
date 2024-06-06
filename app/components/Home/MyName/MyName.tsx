import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function MyName() {
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay:  1, duration: 0.2 },
          y: { delay:  1, duration: 0.2 },
        }}
        className="text-red-700 font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay:  1.2, duration: 0.2 },
          y: { delay:1.2, duration:  0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Umesh Kaushik.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 1.4, duration: 0.2 },
          y: { delay:1.4, duration: 0.2 },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        I make ideas & things alive.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay:  1.6, duration:  0.2 },
          y: { delay:  1.6, duration:  0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a <span className="text-red-700">software engineer</span>, i possess strong problem-solving skills and
        specialize in crafting exceptional <br className="2xl:block hidden" />
        digital experiences. My current area of focus is in the <span className="text-red-700">Full Stack Web Development</span>,
        where I actively engage in developing <br className="2xl:block hidden"/>
        and designing immersive Full Stack applications.
        <br />creating and deploying them, as well as implementing the
        front-end components to enable seamless user interactions.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay:  1.8, duration:  0.2 },
          y: { delay:  1.8, duration:  0.2 },
        }}
        className="mt-12"
      >
        <Link href={"resume/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="hover:bg-slate-900 text-red-700 border rounded px-4 sm:px-8 py-3 sm:py-4 border-red-700">
            Check out my resume!
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
