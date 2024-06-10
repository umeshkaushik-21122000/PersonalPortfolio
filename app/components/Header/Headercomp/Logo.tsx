import React from "react";
import { motion } from "framer-motion";
export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 1, duration: 0 },
          opacity: { delay: props.finishedLoading ? 0 : 1, duration: 0 },
        }}
        className=" relative h-12 w-10 "
      >
        <motion.span
          initial={{ y: -100,rotate:350 }}
          animate={{y:0,rotate:0}}
          transition={{duration:3}}
          className="border border-4 border-red-700 text-red-700 font-bold  rounded-full absolute h-full w-full flex justify-center items-center text-xl"
        >
          U
        </motion.span>
      </motion.div>
    </>
  );
}
