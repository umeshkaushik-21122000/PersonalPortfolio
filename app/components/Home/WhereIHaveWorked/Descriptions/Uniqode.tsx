import React, { useState } from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
import { motion } from 'framer-motion';
type experienceProps={
  title:string;
  achivement: TaskProps[]
}
type TaskProps = {
  text: string;
  keywords: string[];
};
type TasksProps={
  tasks:experienceProps;
}


export default function Uniqode({tasks}:TasksProps) {
  const [isOn,setIsOn]=useState(false);
  const handleClick= ()=>{
    setIsOn(!isOn);
  }

  const achivement=tasks.achivement;
  const title=tasks.title;
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            {title} <span className="text-red-700">@ Uniqode</span>
          </span>
          <span className="font-mono text-xs text-gray-500">Mar 2023 - Present</span>
          <span
            className="font-mono text-xs text-red-700 hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.uniqode.com", "_blank")}
          >
            www.uniqode.com
          </span>
        </div>
        <motion.div initial={false} animate={{height: isOn?"auto":"155px"}} transition={{duration:1}} className="overflow-scroll space-y-4 sm:text-sm text-xs">
          {achivement.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-red-700 flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </motion.div>
        <div className="flex justify-center">
      <motion.button
        onClick={handleClick}
        transition={{ ease: "easeInOut", duration: 1, repeat: Infinity, repeatType: "mirror" }}
        animate={{ y: [0, 20, 0] }}
        className="p-2 border border-2 text-red-700 font-extrabold text-xs transition ease-in-out hover:translate-y-1 rounded-full"
      >
        {!isOn?"v":"^"}
      </motion.button>
    </div>
      </div>
    </>
  );
}
