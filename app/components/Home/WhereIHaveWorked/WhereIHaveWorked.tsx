import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import Uniqode from "./Descriptions/Uniqode";
import { FullTime,Intern } from "@/app/data/Uniqode";
export default function WhereIHaveWorked() {

  const GetDescription = () => {
        return <Uniqode key={DescriptionJob==="Uniqode"?1:2} tasks={DescriptionJob==="Uniqode"?FullTime:Intern}   />;
    }
  const [DescriptionJob, setDescriptionJob] = useState("Uniqode");

  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12">
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-red-700"} />
          <span className="text-red-700 font-sans text-sm  sm:text-xl"> 02.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = ({setDescriptionJob}:any) => {
  const [companyNameBackgroundColorRed, setcompanyNameBackgroundColorRed] = useState<boolean[]>([
    true,
    false,
  ]);
  const CompanyButton = (props:any) => {
    return (
      <button
        onClick={() => {
          setDescriptionJob(props.DescriptionJob);
          setcompanyNameBackgroundColorRed(props.companyNameBackgroundColorRed);

        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-red-700
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorRed[props.ButtonOrderOfcompanyNameBackgroundColorRed]
                 ? "bg-slate-900 text-red-700"
                 : "text-gray-500"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-start items-start sm:items-start"
    >
      <motion.div
        initial={false}

        className=" hidden md:block bg-gray-500 relative h-0.1 w-34 md:h-[220px] translate-y-1 md:w-0.5  
        rounded md:order-1 order-2"
      >
        <motion.div
          animate={true}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded`}
        ></motion.div>
      </motion.div>
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
        <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorRed={0}
            CompanyName="SDE @ Uniqode"
            DescriptionJob="Uniqode"
            companyNameBackgroundColorRed={[true,false]}
            isOn={[true,false]}
            setDescriptionJob={setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorRed={1}
            CompanyName="Intern @ Uniqode"
            DescriptionJob="Uniqode2"
            companyNameBackgroundColorRed={[false,true]}
            isOn={[false,true]}
            setDescriptionJob={setDescriptionJob}
          />
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div animate={true} className="w-[128px] h-0.5 rounded bg-AAsecondary"></motion.div>
        </div>
      </div>
    </div>
  );
};
