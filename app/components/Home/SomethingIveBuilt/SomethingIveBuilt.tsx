import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import Image from "next/image";

export default function SomethingIveBuilt() {
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" lg:flex lg:flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-red-700"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-red-700 font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {projectData.map(
          (
            {
              heading,
              title,
              details,
              imgSrc,
            //   tags,
              isRight,
              links,
            }: ProjectCardProps,
            index: number
          ) => (
            <ProjectCard
                key={index}
              heading={heading}
              title={title}
              details={details}
              links={links}
              imgSrc={imgSrc}
            //   tags={tags}
              isRight={isRight}
            />
          )
        )}
      </div>
    </div>
  );
}

const projectData = [
  {
    heading: "Qr Code Generator",
    title: "Uniqode",
    details: (
      <p className="text-gray-300 md:text-gray-400">
         played a crucial role in developing the{" "}
        <span className="text-red-700"> QR Code Generator </span> for Uniqode, a
        tool designed to enhance product showcase capabilities and user
        engagement. It allows users to create customized QR codes for
        <span className="text-red-700">
          {" "}
          URLs, text, contact information, and Wi-Fi credentials.
        </span>{" "}
        Features include design customization (color, size, logo), downloadable
        formats (PNG, SVG), and advanced{" "}
        <span className="text-red-700"> tracking and analytics</span>. This
        project significantly boosted our marketing effectiveness and customer
        interaction.
      </p>
    ),
    links: ["https://www.uniqode.com/qr-code-generator"],
    imgSrc: "/img/project1.png",
    isRight: true,
  },
  {
    heading: "Purchase Flow",
    title: "Uniqode",
    details: (
      <p className="text-gray-300 md:text-gray-400">
        Integrated the <span className="text-red-700"> Stripe payment gateway </span> on the company&apos;s website,
        developed the pricing page for <span className="text-red-700"> QR </span> and <span className="text-red-700">DBC</span>, and incorporated user
        authentication and plan upgrade functionalities to streamline the
        purchase process and drive <span className="text-red-700"> revenue growth directly</span>.
      </p>
    ),
    links: ["https://www.uniqode.com/pricing"],
    imgSrc: "/img/project2.png",
    isRight: false, 
  },
  {
    heading: "Implementation  in-house UI component library",
    title: "Uniqode",
    details: (
      <p className="text-gray-300 md:text-gray-400">
         played a key role in   
        <span className="text-red-700">  designing and implementing our in-house UI component library, Ohana, </span> utilizing
        <span className="text-red-700"> Storybook</span>. 
        to create and showcase a range of reusable components. 
        We establishing a robust and scalable library that enhances consistency and efficiency across our projects.{" "}
      </p>
    ),
    links: ["https://marketing-design-system.web.app/?path=/story/introduction-introduction--page"],
    imgSrc: "/img/ohana.png",
    isRight: true,
  },
  {
    heading: "Design and Integration of Reward System for affiliate",
    title: "Uniqode",
    details: (
      <p className="text-gray-300 md:text-gray-400">
         Designed and integrated a  {" "}
        <span className="text-red-700"> reward system for an affiliate partner </span> for Uniqode, a
        using PartnerStack, which improved affiliate engagement and streamlined reward processing.
         Developed a  {" "}
        <span className="text-red-700"> reward cancellation</span>. 
        flow to handle refund requests within a 14-day policy period, ensuring efficient processing and adherence to refund policies.
      </p>
    ),
    links: ["https://www.uniqode.com/affiliate"],
    imgSrc: "/img/partnerstack.png",
    isRight: false,
  },
];

type ProjectCardProps = {
  heading: string;
  title: string;
  details: any;
  links: string[];
  imgSrc: string;
//   tags: any;
  isRight: boolean;
};

const ProjectCard = ({
  heading,
  title,
  details,
  links,
  imgSrc,
//   tags,
  isRight,
}: ProjectCardProps) => {
  return (
    <div className=" py-5 relative xl:grid xl:grid-cols-12 gap-4">
      <div
        className={`relative z-10 ${
          isRight ? "xl:col-start-1 xl:col-end-8" : "xl:col-start-5 xl:col-end-12"
        }`}
      >
        <Image
          src={imgSrc}
          className="w-full h-auto opacity-35 xl:opacity-90"
          alt="Project image"
          height={200}
          layout="responsive"
          width={200}
        />
      </div>
      <div
        className={`absolute ps-6 z-30  inset-0 flex flex-col justify-center ${
          isRight
            ? "xl:text-end xl:col-start-6 xl:col-end-12"
            : "text-start xl:col-start-1 xl:col-end-6"
        } text-xs xl:text-base`}
      >
        <span className="text-red-700 text-base font-semibold">{heading}</span>
        <span className="md:text-gray-200 font-bold text-xl hover:cursor-pointer">
          {title}
        </span>
        <div className="rounded-md py-6 md:p-6  xl:opacity-90 xl:bg-gray-900 z-20">{details}</div>
        <div className={`flex ${isRight?"xl:justify-end":"justify-start"} mt-4`}>
          <ExternalLink url={links[0]} />{" "}
        </div>
      </div>
    </div>
  );
};
