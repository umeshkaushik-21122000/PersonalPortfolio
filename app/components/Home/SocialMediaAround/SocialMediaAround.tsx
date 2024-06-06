import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import Link from "next/link";

const IconClickableWithAnimation = (props:any) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.5 },
      }}
    >
      <a href={props.href} className="" target={"_blank"} rel="noreferrer">
        <props.Icon className={"w-6 h-6 text-gray-400 hover:text-red-700 fill-current hover:cursor-pointer"} />
      </a>
    </motion.div>
  );
};
export default function SocialMediaEmail() {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: 3, duration:  0.5 } }}
        className="z-10 fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* Github Icon */}
            <IconClickableWithAnimation Icon={GithubIcon} href={"https://github.com/umeshkaushik-21122000"} />
            {/* Linkedin icon */}
            <IconClickableWithAnimation Icon={LinkedinIcon} href={"https://www.linkedin.com/in/umesh-kaushik21/"} />
          </div>
          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>


      <motion.div
        initial={{ y: "200%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: 3, duration:  0.5 } }}
        className="z-10 fixed bottom-0 -right-10 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-24 justify-center items-center">
          {/* Open Email on click */}
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -5,
              transition: { y: { duration: 0.5 }, rotate: { duration: 0 } },
            }}
            className="mb-5"
          >
            <Link href="mailto:kaushikumesh21@gmail.com" target={"_blank"} rel="noreferrer">
              <span className=" font-Header tracking-wider text-gray-400 hover:text-red-700 hover:cursor-pointer">
                kaushikumesh21<span className="text-red-700">@</span>gmail<span className="text-red-700">.</span>com
              </span>
            </Link>
          </motion.div>

          <div className="h-[100px] w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
}
