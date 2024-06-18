"use client";
import Header from "@/app/components/Header/Header";
import MyName from "@/app/components/Home/MyName/MyName";
import  SocialMediaAround from "@/app/components/Home/SocialMediaAround/SocialMediaAround";
import AboutMe from "@/app/components/Home/AboutMe/AboutMe";
import GetInTouch from "@/app/components/Home/GetInTouch/GetInTouch";
import Footer from "@/app/components/Footer/Footer";
import WhereIHaveWorked from "@/app/components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomeThingIveBuilt from '@/app/components/Home/SomethingIveBuilt/SomethingIveBuilt';
import { useEffect, useState } from "react";
import Projects from "@/app/components/Projects/Projects";
const  Home=()=> {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isCircleVisible, setIsCircleVisible] = useState(true);
    const handleScroll = () => {
      setIsCircleVisible(false); // Hide the circle when scrolling
    };
    useEffect(() => {
      const handleMouseMove = (event:any) => {
        setMousePosition({
          x: event.pageX,
          y: event.pageY,
        });
        setIsCircleVisible(true);
      };
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
    }, []);
  return (
      <main>
    <div className="honeycomb">
          <Header  />
          <MyName  />
           <SocialMediaAround  />
           <AboutMe  /> 
          <WhereIHaveWorked />
           <SomeThingIveBuilt /> 
           <Projects />
           <GetInTouch /> 
            <Footer githubUrl={"https://github.com/umeshkaushik-21122000"} hideSocialsInDesktop={true}   />
      {isCircleVisible && 
      <div
      className="circle hidden xl:block"
      style={{
        left: mousePosition.x-45,
        top: mousePosition.y-45,
        position:"absolute",
        zIndex:"-1",
        height:"100px",
        width:"100px",
        borderRadius:"50%"
      }}
    />
      }
        </div>
      </main>
  );

}

export default Home;
