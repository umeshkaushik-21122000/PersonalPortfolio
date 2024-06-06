import React from "react";
import Image from "next/image";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe() {
  const technologies = [
    ["Next.js", "JavaScript (ES6+)", "Tailwind CSS","React.js","Zustand","Mysql"],
    ["Node.js", "TypeScript", "Framer Motion","Express.js","Redis","MongoDb"],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-red-700"
              }
            />
            <span className="text-red-700 font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>


        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Hi, I'm Umesh Kaushik, a dedicated Software Engineer with a
                passion for creating impactful and innovative solutions. My
                journey in technology began with a strong academic foundation at
                Maharaja Agrasen Institute of Technology, where I graduated with
                a Bachelor's degree in Technology, achieving a commendable GPA
                of 9.00/10.00.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                From an early age, I was fascinated by the limitless
                possibilities that technology offered to solve real-world
                problems. This curiosity led me to explore various programming
                languages, starting with Java and later expanding to <span className="text-red-700">TypeScript </span> 
                and <span className="text-red-700">JavaScript</span> . My proficiency in these languages, has enabled me to tackle complex
                challenges and develop robust software solutions.
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently
                :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-red-700"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-red-700"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-red-700 translate-x-5 
               translate-y-5 rounded-lg"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0  opacity-10 duration-300 rounded overflow-hidden"></div>
              <Image
                src={"/img/portfolio-portrait-3.png"}
                className={"object-cover rounded-lg h-full w-full"}
                alt="My Image Not Found"
                height={200}
                width={330}
              />
            </div>
          </div>
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 "></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Image
                src={"/img/portfolio-portrait-3.png"}
                className={"object-cover rounded-lg h-full w-full"}
                alt="My Image Not Found"
                height={200}
                width={330}
              />
            </div>
            <div className="absolute w-48 h-full   opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
