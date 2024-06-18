import { describe } from "node:test";
import React from "react";
import ExternalLink from "../Icons/ExternalLink";
import Folder from "@/app/components/Folder/Folder";

const Projects = () => {
  return (
    //project section
    // heading
    <>
      <div className="flex flex-col items-center justify-center py-24 space-y-12">
        <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
          Other Noteworthy Projects
        </span>
        <div className="grid grid-cols-8">
          {arr.map(({ heading, detail, tag, link }, index) => (
            <Project
              key={index}
              heading={heading}
              detail={detail}
              tag={tag}
              link={link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const arr = [
  {
    heading: "ConversaSync",
    detail:
      "Created and integrated real-time chat, audio calling, and video calling functionality utilizing,WebSocket and Socket.io technologies.Incorporated multimedia file sharing capabilities, allowing users to share images, videos, and documents within chat channels.Implemented moderation tools such as message deletion, user banning, and role management to maintain a healthy community environment.",
    tag: ["NEXT.JS","TYPESCRIPT", "SOCKET.IO","CLERK", "CONVEX", "TAILWIND","SHADCN-UI"],
    link: "https://github.com/umeshkaushik-21122000/ConversaSync",
  },
  {
    heading: "CollabCanvas",
    detail:
      "Built an online collaborative whiteboarding platform enabling distributed teams to brainstorm, plan, and manage workflows effectively.Enforced a user-friendly interface with features such as digital sticky notes, drawing tools, and shape libraries for creating and organizing ideas.Integrated real-time collaboration features allowing multiple users to work together on the same board simultaneously, ensuring seamless and efficient collaboration.Executed responsive design principles to ensure optimal user experience across various devices and screen sizes.",
    tag: ["NEXT.JS", "CLERK", "CONVEX", "TAILWIND","SHADCN-UI"],
    link: "this is link",
  }
];

type projectProps = {
  heading: string;
  detail: string;
  tag: string[];
  link: string;
};

const Project = ({ heading, detail, tag, link }: projectProps) => {
  return (
    <div className="col-span-4 flex flex-col justify-between bg-red ml-5 mt-5 bg-gray-900 rounded-md p-5 max-w-[400px]">
      {/* image and link section */}
      <div className="flex justify-between">
        <div>
          <Folder />
        </div>
        <div>
          <ExternalLink url={link} />
        </div>
      </div>
      {/* heading section */}
      <h3 className="text-gray-200 text=start font-bold my-3">{heading}</h3>
      {/* detail section */}
      <p className="text-gray-400 text-sm text-start line-clamp-3">{detail}</p>
      {/* tag section */}
      <div className="flex mt-5 gap-2  text-sm flex-wrap ">
        {tag.map((tag, index) => (
          <span className={`text-gray-500  text-xs inline-block`} key={index}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
