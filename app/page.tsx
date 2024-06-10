"use client";
import Header from "@/app/components/Header/Header";
import MyName from "@/app/components/Home/MyName/MyName";
import  SocialMediaAround from "@/app/components/Home/SocialMediaAround/SocialMediaAround";
import AboutMe from "@/app/components/Home/AboutMe/AboutMe";
import GetInTouch from "@/app/components/Home/GetInTouch/GetInTouch";
import Footer from "@/app/components/Footer/Footer";
import WhereIHaveWorked from "@/app/components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomeThingIveBuilt from '@/app/components/Home/SomethingIveBuilt/SomethingIveBuilt';
export default function Home() {

  return (
      <main>
    <div className="">
          <Header  />
          <MyName  />
           <SocialMediaAround  />
           <AboutMe  /> 
          <WhereIHaveWorked />
           <SomeThingIveBuilt /> 
           <GetInTouch /> 
            <Footer githubUrl={"https://github.com/umeshkaushik-21122000"} hideSocialsInDesktop={true}   /> 
        </div>

      </main>
  );
}
